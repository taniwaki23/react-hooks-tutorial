import { ChangeEvent, useState } from 'react';

const Lesson1_1 = () => {
  // state(age)の箇所だけ再レンダリングされるようになる
  const [age, setAge] = useState<number>(0);
  const [name, setName] = useState('demo');

  const handleClick = () => {
    setAge(age + 1);
    // setAge((state) => state + 1);
    // setAge((state) => state + 1);
    // setAge((state) => state + 1);
    /* 
    setAge(age + 1);を複数実施しても、初期値(0)に対して実行されるので、値は3（3回実施)にはならず、1となる。
    最後のsetAgeが終わったタイミングでレンダリングされる
    setAge((state)=> state + 1)とすると更新用関数となるので、3とすることが可能。
    */

    console.log(name);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      {/* 
      buttonのonClickについて、アロー関数を使う場合は、引数を指定する時に使う。
      */}
      <button
        onClick={handleClick}
        // onClick={() => handleClick()}
        className="border p-2 rounded-md bg-red-100"
      >
        Add Age
      </button>
      <p>{age}</p>
    </div>
  );
};

export default Lesson1_1;
