import React from 'react';
import { userApi } from 'Services/Api/module/demoApi';

function ExampleRtk() {
  const { useDemoApiQuery } = userApi;
  const { data } = useDemoApiQuery();
  return (
    <div>
      <p>Hello</p>
      {data?.map((item) => (
        <div>
          <h4>
            {item?.title}
            {' '}
            -
            {item?.id}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default ExampleRtk;
