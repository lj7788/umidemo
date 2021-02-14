import { useState, useContext, createContext } from 'react';
const CtxName = createContext();

const Test3 = () => {
  const [name, setName] = useState('Haha');
  return (
    <div>
      <h3>UseContext 爷爷</h3>
      <div style={{ border: '1px solid #999' }}>name:{name}</div>
      <button
        onClick={() => {
          setName('new Name ' + +new Date());
        }}
      >
        改名字
      </button>
      <CtxName.Provider value={{ name: name, age: 18 }}>
        <Child />
      </CtxName.Provider>
    </div>
  );
};

const Child = () => {
  return (
    <div style={{ border: '1px solid #999' }}>
      Child 儿子
      <ChildChild />
    </div>
  );
};

const ChildChild = () => {
  let childName = useContext(CtxName);
  return (
    <div style={{ border: 'solid 1px #999' }}>
      ChildChild 孙子
      <p>
        {childName.name}:{childName.age}
      </p>
    </div>
  );
};
export default Test3;
