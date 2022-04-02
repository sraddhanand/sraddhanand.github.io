---
id: pandas
title: Pandas 
---


```python
import pandas as pd
import numpy as np
# visualization
import matplotlib.pyplot as plt
%matplotlib inline
```

## Reading the data 
```python
df = pd.read_csv('https://archives.nseindia.com/products/content/sec_bhavdata_full_31072020.csv',skipinitialspace=True,index_col='SYMBOL')
```

## insights from data
```python
df.columns
df.index
df.shape
df.size
```

## extract the data

```python
df1.sort_values(by = ['TURNOVER_LACS','SYMBOL'],ascending=[False, True]).head(20)['SYMBOL'].to_list()
df.groupby('choice_description').quantity.sum().sort_values(ascending=False).index[0]
len(df['order_id'].value_counts())
df.groupby('order_id').sum().mean()
df.item_name.value_counts().count()

```

## Manupulation

```python
df['item_price'] = df['item_price'].apply(lambda x: float(x.replace('$','')))

```



apple.Date = pd.to_datetime(apple.Date)
apple['Date'].head()
apple = apple.set_index('Date')

apple.head()
apple.index.is_unique
apple.sort_index(ascending = True).head()
df.drop_duplicates()
```