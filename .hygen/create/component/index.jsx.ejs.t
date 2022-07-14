---
to: <%= absPath %>/index.jsx
---
import React from 'react';
import style from './<%= component_name %>.module.css';

const <%= component_name %> = (props) => (
  <div className={style.container}></div>
);

export default <%= component_name %>;
