# 导入函数库
from jqdata import *

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
    run_daily(market_open, time='every_bar', reference_security=g.security)
    # 收盘后运行
    # run_daily(after_market_close, time='after_close', reference_security=g.security)


def market_open(context):
    log.info('函数运行时间(market_open):'+str(context.current_dt))
    # 获取股票的收盘价
    close_data = get_bars(g.security, count=80, unit='60m', fields=['close'])
    # 取得M80
    M80 = close_data['close'].mean()
    # 取得上一时间点价格
    current_price = close_data['close'][-1]
    # 取得当前的现金
    cash = context.portfolio.available_cash
    log.info("当前可用资金为 %s, 市值 %s" % (cash, context.portfolio.positions_value))

    # 如果上一时间点价格高出M80, 则全仓买入
    if (current_price > 1*M80) and (cash > 100*M80):
        # 记录这次买入
        log.info("=================================")
        log.info("当前价格 %s 高于M80, 买入 %s" % (current_price,g.security))
        # 用所有 cash 买入股票
        order_value(g.security, cash)
        # log.info("当前可用资金为 %s, 市值 %s" % (cash, context.portfolio.positions_value))
        log.info("=================================")
    # 如果上一时间点价格低于M80, 则空仓卖出
    elif current_price < M80 and context.portfolio.positions[g.security].closeable_amount > 100*M80:
        # 记录这次卖出
        log.info("=================================")
        log.info("当前价格 %s 低于M80, 卖出 %s" % (current_price,g.security))
        # 卖出所有股票,使这只股票的最终持有量为0
        order_target(g.security, 0)
        # log.info("当前可用资金为 %s, 市值 %s" % (cash, context.portfolio.positions_value))
        log.info("=================================")
    else:
      pass



def after_market_close(context):
    log.info(str('函数运行时间(after_market_close):'+str(context.current_dt)))
    #得到当天所有成交记录
    trades = get_trades()
    for _trade in trades.values():
        log.info('成交记录：'+str(_trade))
    log.info('==============一天结束==============')