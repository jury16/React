import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Ishop from './Ishop';


    
render(
  
  <Ishop shopName='Shop' cars={require('./cars.json')}/>,
        document.getElementById('root')
        )


