import React from "react";
import { FormattedDate } from "react-intl";
import { FormattedMessage } from "react-intl";
const Job = (props) => {
  var millon = "million";
 
  if(navigator.language.includes('es')){
    if (props.offer.salary === 1) {
      millon = "millón";
    } else if(props.offer.salary>1) {
      millon = "millones";
    }
    
  }
console.log(props.offer.views.toLocaleString('en', { maximumSignificantDigits: 3 }));
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary +" "}<FormattedMessage id={millon}/>
      </td>
      <td>{props.offer.city}</td>
      <td>
  <FormattedDate
    value={new Date(props.offer.date)}
    year='numeric'
    month='long'
    day='numeric'
    weekday='long'
  />
  </td>
   <td>
        <FormattedMessage id={props.offer.views.toLocaleString('en',{ maximumSignificantDigits: 3 }, {maximumFractionDigits:0})} />
      </td>

    </tr>
  );
};

export default Job;
