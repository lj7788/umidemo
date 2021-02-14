import { useRef } from 'react';
import { Input, Button } from 'antd';
export default (props) => {
  const val = useRef();
  return (
    <div>
      this is test2
      <hr />
      <Input ref={val} />
      <Button
        onClick={() => {
          console.log('value->', val.current.input.value);
        }}
      >
        Get input value
      </Button>
      <hr />
    </div>
  );
};
