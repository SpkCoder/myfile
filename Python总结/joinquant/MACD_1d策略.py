# 导入函数库
from jqdata import *
import talib

# 初始化函数，设定基准等等
def initialize(context):
    # 设定沪深300作为基准
    set_benchmark('000300.XSHG')
    # 开启动态复权模式(真实价格)
    set_option('use_real_price', True)
    # 输出内容到日志 log.info()
    log.info('初始函数开始运行且全局只运行一次')
    # 过滤掉order系列API产生的比error级别低的log
    # log.set_level('order', 'error')

    ### 股票相关设定 ###
    # 股票类每笔交易时的手续费是：买入时佣金万分之二，卖出时佣金万分之二加千分之一印花税, 每笔交易佣金最低扣5块钱
    set_order_cost(OrderCost(close_tax=0.001, open_commission=0.0002, close_commission=0.0002, min_commission=5), type='stock')

    # 要操作的股票：300ETF
    g.security = '510300.XSHG'

    # 开盘时运行
    run_daily(market_open, time='15:00', reference_security=g.security)



def market_open(context):
    log.info('函数运行时间(market_open):'+str(context.current_dt))
     # 取得当前的现金
    cash = context.portfolio.available_cash
    log.info("当前可用资金为 %s, 市值 %s" % (cash, context.portfolio.positions_value))

    # 获取股票的收盘价
    close_data = get_bars(g.security, count=5, unit='1d', fields=['close'], include_now=True)
    # 取得上一时间点价格
    current_price = close_data['close'][-1]

    # 获取前三根macd
    result = get_macd([g.security], shift=-3)
    list_macd = result[g.security]
    macd1 = list_macd[0][0]
    macd2 = list_macd[1][0]
    macd3 = list_macd[2][0]

    # 如果macd值逐渐变大, 则全仓买入
    if (macd3 > macd2 > macd1) and (cash > 100*current_price):
        # 记录这次买入
        log.info("=================================")
        log.info((macd1, macd2, macd3))
        log.info("当前macd值逐渐变大, 买入 %s" % (g.security))
        # 用所有 cash 买入股票
        order_value(g.security, cash)
        # log.info("当前可用资金为 %s, 市值 %s" % (cash, context.portfolio.positions_value))
        log.info("=================================")
    # 如果macd值逐渐变小,  则空仓卖出
    elif (macd3 < macd2 < macd1) and context.portfolio.positions[g.security].closeable_amount > 100*current_price:
        # 记录这次卖出
        log.info("=================================")
        log.info((macd1, macd2, macd3))
        log.info("当前macd值逐渐变小, 卖出 %s" % (g.security))
        # 卖出所有股票,使这只股票的最终持有量为0
        order_target(g.security, 0)
        # log.info("当前可用资金为 %s, 市值 %s" % (cash, context.portfolio.positions_value))
        log.info("=================================")
    else:
      pass



def get_macd(stock_list, check_date=None, unit='1d', include_now=True,shift=-1):
    """
    MACD计算函数，返回一个嵌套字典，Key是股票代码，Value是一个字典，不包括当前时间段的值
    stock_list：可以指定单只股票，也可以是股票列表
    check_date: 获取MACD值的日期，注意未来数据值
    unit：支持分钟 xm、天 xd、周 xw 时间段的数据
    include_now: 是否包含当前时间段的bar,默认False
    shift:偏移量 -4代表前4个macd
    """
    dict_macd = {}
    if isinstance(check_date,str):
        check_date = datetime.datetime.strptime(check_date, "%Y-%m-%d %H:%M:%S")
    
    '''如果股票代码是个字符串而不是一个列表，进行转换'''
    if isinstance(stock_list,str):
        stock_list = [stock_list]
    
    for stock in stock_list:
        '''获取指定日期之前的300个收盘价信息'''
        close_data = get_bars(security=stock, 
                         count=300, 
                         unit=unit,
                         fields=['close'],
                         include_now=include_now,
                         end_dt=check_date, 
                         fq_ref_date=check_date)
        close_list = close_data['close']

        '''求出用300个数据推算出的dif/dea/macd集合，Macd计算必须传入Narray值'''
        diff, dea, macd = talib.MACD(close_list, 
                                 fastperiod=12, 
                                 slowperiod=26, 
                                 signalperiod=9)

        dict_macd[stock] = []
        for index,value in enumerate(macd[shift:]):
            tuple_obj = (round(macd[shift:][index]*2, 4), round(diff[shift:][index], 4), round(dea[shift:][index], 4))
            dict_macd[stock].append(tuple_obj)

    return dict_macd