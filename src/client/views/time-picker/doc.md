# TimePicker

## Props

```js
props: {
  start: {
    type: String,
    default: '09:00',
  },
  end: {
    type: String,
    default: '22:00',
  },
  step: {
    type: Number,
    default: 15, // mins
  },
  open: {
    type: Boolean,
    default: false,
  },
  defaultValue: {
    type: String,
    default: Date().match(/\d\d:\d\d/)[0], // Current time of client
  }
},
```

## Events

### change(data)

#### data.value 
Gets selected time.

## Example
