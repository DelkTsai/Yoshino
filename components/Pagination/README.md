### 默认
```js
<div>
  <Pagination total={50}/>
</div>
```

### 受控组件
```js
initialState = { current: 3 };

<div>
  <Pagination
    current={state.current}
    total={200}
    onChange={(current) => {
      setState({current});
    }}
  />
</div>
```