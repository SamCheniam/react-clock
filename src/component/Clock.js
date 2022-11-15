const Clock = ({ cx, cy, r, id, clr, myClass, Dash, rotateDeg }) => {
  return (
    <div className="circle" style={{ "--clr": clr }}>
      <div className={myClass} style={{ rotate: rotateDeg }}></div>
      <svg>
        <circle
          cx={cx}
          cy={cy}
          r={r}
          id={id}
          style={{ strokeDashoffset: Dash }}
        ></circle>
      </svg>
    </div>
  );
};
export default Clock;

// import React from "react";
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="circle" style={{ "--clr": this.props.clr }}>
//         <div className={this.props.myClass}></div>
//         <svg>
//           <circle
//             cx={this.props.cx}
//             cy={this.props.cy}
//             r={this.props.r}
//             id={this.props.id}
//             style={{ strokeDashoffset: this.props.styles }}
//           ></circle>
//         </svg>
//       </div>
//     );
//   }
// }

// export default Clock;
