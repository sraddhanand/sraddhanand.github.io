---
id: data-explore
sidebar_label: Data Explore
title: Data exploration/transformation
---


1. Reading the data
2. Variable identification
    - type of variables
        - predictors
        - targets
    - data types
    - variable category
        - Categorical
        - Continuous
3. Univariate analysis
    - Bar plot
    - histograms
4. Bi-variate analysis
    - relation between 2 vars
5. Missing values treatment
5. Outlier treatment
6. variable transerfmation


## Reading the data

```python
import pandas as pd

df = pd.read_csv('data.csv')
df.shape
df.size
df.columns
df.head
df.head(10)
```

## Variable Identification

- Types:
    - **identify independent** : which we are trying to predict
    - **dependent variables** : which help in predicting the dependent variables
    - Distinguish using the problem statement
- Category:
    - Modeling do differ for Continuous and categorical variables
    - **Continuous** : can take any value in the range
        > pandas <code>int</code> or <code>float</code> dtypes     
    - **categorical variables** : discreat    
        > pandas <code>object</code> dtypes    
```python
df.dtypes
```

## Univariate Analysis
1. Explore one variable at a time
2. summerize the variable
3. Discover insights and anomolies
    - type of data distribution
    - does the data disribution looks correct
    - find anomolies
4. Box plot to find anomolies (mostly for Continous data)
    - Lower fence, Q1, median, Q3, Upper fence
    - lower - Q1 >> 25% of data
    - Box contains 50% of data
5. Analysis varies with type of variable
6. Analyse Continuous Variables:
    - Tabular methods
        - **central tendency & dispersion**: mean, median, standarad deviation        
        ```python
        df.describe()
        ```
        - missing values
    - Graphical methods
        - **Distribution of variable** : symmetric/ right skewed/ Left skewed
            - histograms
            ```python
            df.hist()
            ```
        - outliers
            - boxplot
            ```python
            df.boxplot('price')
            df['price'].plot.box()
            ```
7. Analyse categorical Variables:    
    - **Tabular methods**: Count
        ```python
        df['location'].value_counts()
        df['location'].value_counts() * 100/len(df['location'])
        ```
    - **Graphical methods** : Bar plot
        ```python
        df['location'].value_counts().plot.bar()
        df['location'].value_counts().head(5).plot.bar()
        (df['location'].value_counts() * 100/len(df['location'])).head(5).plot.bar()
        ```
## Bi-variate Analysis
- When 2 variables need to be studied together for emirical relationship
- it also helps in detecting anomolies
- **type**:
    - continuous variables
        - scatter plot
        ```python
        df.plot.scatter('total_sqft', 'price')
        ```
        - correlation between valiables        
            - r =
            - **positive correlation**: When one increases other var increases (r > 0)
            - **no correlation**: r = 0
            - **negative correlation** : When one increases other var decreases (r < 0)
            ```python
            df.corr()
            df['price'].corr(df['total_sqft'])
            ```
    - 1 Continuous and 1 categorical:
        - Bar plot
        ```python
        df.groupby('location')['price'].mean().plot.bar()
        ```
        - 2-Sample T-test
        ```python
        from scipy.stats import ttest_ind
        df_marat = df[(df['availability'] == 'Ready To Move') & (df['location'] == 'Marathahalli')]
        df_white = df[(df['availability'] == 'Ready To Move') & (df['location'] == 'Whitefield')]
        df_srjp = df[(df['availability'] == 'Ready To Move') & (df['location'] == 'Sarjapur  Road')]
        ttest_ind(df_white['price'],df_srjp['price'], nan_policy='omit' )
        ttest_ind(df_white['price'],df_marat['price'], nan_policy='omit' )
        ```
    - 2 categorical variables
        - two way table
        ```python
        df['size'] = df['size'].apply(lambda x: int(str(x).replace('Bedroom','').replace('BHK','').replace('RK','').replace('nan','0').strip()) if x is not None else None)
        pd.crosstab(df['area_type'], df['size'])

        ```
        - chi-square Test
        ```python
        from scipy.stats import chi2_contingency
        chi2_contingency(pd.crosstab(df['area_type'], df['size']))
        ```
## Missing value treatment
- **Identify**:
    1. Use <code>describe</code> <code>count</code> property in conjuction with <code>shape</code> output.
        ```python
        df.share()
        df.describe() # displays only continuous variables
        df.describe(include='all')  # displays continuous and categorical variables
        ```
        > Use this method for continuous variables
    2. use <code>isnull</code>
        ```python
        df.isnull()
        df.isnull().sum()
        ```
- Dealing with missing values
    - **imputaion** : Instead of deleting the missing values, handle it inline
        ```python
        df.fillna('0')
        df['size'].fillna(0)
        df.fillna('0',inplace=True)
        df['bath'].fillna(int(df['bath'].mean()))
        df['size'].fillna(int(df['size'].mode()))
        df['size'].fillna(int(df['size'].median()))
        ```
    - **deletion** : Delete the row or column
        - delete all the rows where missing values present
            ```python
            df.dropna()
            df.dropna(how='all') # remove the rows where all columns have missing values
            df.dropna(axis=1) # remove the columns where missing values present
            df.dropna(how='all', axis=1)  # remove the columns where missing values present
            ```
## Outliers
- Reasons
    - date entry errors
    - measumente errors (km vs m)
    - processing error
    - change in the underlying population
- type
    - univariate
        - boxplot
            - IQR = Q3-Q1
            - if value < Q1 - 1.5*IQR or > Q3 + 1.5*IQR
    - bi-variate
        - scatter plot
- dealing
    - Delete the observation
    - transform & binning values
    - imputing like missing values
    - treat them as seperate

## Varialbe transformation
- replace var values with some function
- Commont methods:
    1. Logarithms: log of variable reduces right skewedness
    ```python
    df['price'].plot.hist()
    np.log(df['price']).plot.hist()
    ```
    2. Square root: used for right skewedness with positive values
    ```python
    np.sqrt(df['price']).plot.hist()
    ```
    3. Cube root:  used for right skewedness with positive or negative values
    ```python
    np.power(df['price'],1/3).plot.hist()
    ```
    4. Binning: continuous variable to categorical variable
    ```python
    df['total_sqft'].plot.hist()
    bins = [0, 1000, 2000, 3000, 16000]
    groups = ['congested', 'livable', 'spacious', 'luxery']
    df['area_cat'] = pd.cut(df['total_sqft'],bins,labels=groups)
    df['area_cat'].value_counts()
    ```