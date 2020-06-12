#!/usr/bin/env python3
# -*- coding: utf-8 -*-
""" 
ts.get_hist_data('600036')
    参数说明：
code：股票代码，即6位数字代码，或者指数代码（sh=上证指数 sz=深圳成指 hs300=沪深300指数 sz50=上证50 zxb=中小板 cyb=创业板）
start：开始日期，格式YYYY-MM-DD
end：结束日期，格式YYYY-MM-DD
ktype：数据类型，D=日k线 W=周 M=月 5=5分钟 15=15分钟 30=30分钟 60=60分钟，默认为D
retry_count：当网络异常后重试次数，默认为3
pause:重试时停顿秒数，默认为0
    返回值说明：
date：日期
open：开盘价
high：最高价
close：收盘价
low：最低价
volume：成交量
price_change：价格变动
p_change：涨跌幅
ma5：5日均价
ma10：10日均价
ma20:20日均价
v_ma5:5日均量
v_ma10:10日均量
v_ma20:20日均量
turnover:换手率[注：指数无此项] 
"""

import numpy as np
import pandas as pd
import tushare as ts
# import talib

tdata = ts.get_hist_data('600036')
# tdata['diff'], tdata['dea'], tdata['macd'] = talib.MACD(tdata.close.values, fastperiod=12, slowperiod=26, signalperiod=9)
print(tdata[0:3])
# print(tdata[0:3].index)
# print(tdata[0:3].index[0])
# print(tdata[0:3].columns)
# print(tdata.loc[tdata[0:3].index[0], 'open'])


list_data = []
for row_index, row in tdata[0:3].iterrows():
    dict_data = {
        'time': row_index,
        'open': row['open'],
        'high': row['high'],
        'close': row['close'],
        'low': row['low'],
        'volume': row['volume'],
        'price_change': row['price_change'],
        'p_change': row['p_change'],
        'ma5': row['ma5'],
        'ma10': row['ma10'],
        'ma20': row['ma20'],
    }
    list_data.append(dict_data)
print(list_data)


# s = pd.Series([1, 3, 5, np.nan, 6, 8])
# s1 = pd.Series([1, 2, 3, 4, 5, 6], index=pd.date_range('20130101', periods=6))
# print(s)
# print(s1)

# dates = pd.date_range('20130101', periods=6)
# print(dates)
# df = pd.DataFrame(np.random.randn(6, 4), index=dates, columns=list('ABCD'))
# print(df)


# df2 = pd.DataFrame({
#     'A': 1.,
#     'B': pd.Timestamp('20130102'),
#     'C': pd.Series(1, index=list(range(4)), dtype='float32'),
#     'D': np.array([3] * 4, dtype='int32'),
#     'E': pd.Categorical(["test", "train", "test", "train"]),
#     'F': 'foo'
# })
# print(df2)

# df.sort_index(axis=1, ascending=False)
# df.sort_values(by='B')
# print(df)
# print(len(df))
# df3 = df[0:3]
# print(df3)
# print('============')
# print(df3.index)
# print(df3.columns)
# print(df3.A[0:3])
# print(df3.loc['20130102':'20130104', ['A', 'B']])
# print(df3.loc[dates[0]])
# print(df3.loc[dates[0], 'A'])
# print(df3.iloc[3:5, 0:2])
# print(df3.iloc[0, 0])

# a = np.array([[1,  2],  [3,  4]])
# print(a)
# print(a.ndim)
# print(a.shape)


# import pandas as pd
# import numpy as np
# import talib as ta
# import tushare as ts
# from matplotlib import rc
# rc('mathtext', default='regular')
# import seaborn as sns
# sns.set_style('white')
# %matplotlib inline

# dw = ts.get_k_data("600036")
# close = dw.close.values
# dw['macd'], dw['macdsignal'], dw['macdhist'] = talib.MACD(close, fastperiod=12, slowperiod=26, signalperiod=9)
# dw[['close','macd','macdsignal','macdhist']].plot()

