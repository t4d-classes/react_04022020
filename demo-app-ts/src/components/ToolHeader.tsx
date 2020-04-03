import React, { FC, memo } from 'react';

interface ToolHeaderProps {
  headerText: string;
}

export const ToolHeader: FC<ToolHeaderProps> = memo((props) => {

  console.log('tool header rendering');

  return <header>
    <h1>{props.headerText}</h1>
  </header>;

});

// export class ToolHeader extends React.PureComponent<ToolHeaderProps> {

//   // shouldComponentUpdate(newProps, newState) {
//   //   // compare the old and new to see if you want to re-render
//   // }

//   render() {
//     console.log('tool header rendering');
//     return <header>
//       <h1>{this.props.headerText}</h1>
//     </header>;
//   }
// }
