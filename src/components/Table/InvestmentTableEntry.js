const InvestmentTableEntry = (props) => {
  return (
    <tr key={props.year}>
      <td>{props.year}</td>
      <td>{props.savingsEndOfYear}</td>
      <td>{props.yearlyInterest}</td>
      <td>
        {props.savingsEndOfYear -
          props.initialInvestment -
          props.yearlySavings * props.year}
      </td>
      <td>{props.initialInvestment + props.yearlySavings * props.year}</td>
    </tr>
  );
};

export default InvestmentTableEntry;
