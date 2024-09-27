import React, { Component } from 'react'

import { NodeGroup } from 'react-move'
import { useState } from 'react';

/*class Guideline extends PureComponent {

}*/


export default class Guideline extends Component {
	constructor(props) {
		console.log("props: " + props);
    	super(props);
    	this.wrapperRef = React.createRef();
    	this.length = props.length;
    	this.x = props.x;
    	this.y = props.y;
    	this.animateY = props.animateY;
    	this.id = props.id;
    	this.state = {animate: false};
  	}
  	componentDidMount(){
      this.setState({animate: true})
      console.log("animate set: " + this.id);
    }

	anim() {
    	const wrapper = this.wrapperRef.current;
    	wrapper.classList.toggle('anim');
    	console.log("toggled: " + this.id);
  	}


	render() {
		var doubleLength = this.length * -2;
		return <path id={this.state.animate ? this.id : ""} className="Guideline" d={`M ${this.x} ${this.y} l ${this.length} 0 l ${doubleLength} 0`} preserveAspectRatio="xMidYMid meet"/>;
	}
}


/*class Example extends PureComponent {
  state = {
    show: false,
    color: '#00cf77',
  }

  updateShow = () => {
    this.setState((prev) => ({ show: !prev.show }))
  }

  updateColor = () => {
    this.setState(() => ({ show: true, color: getRandomColor() }))
  }

  render() {
    const { updateShow, updateColor, state: { show, color } } = this

    return (
      <div>
        <button onClick={updateShow}>
          Toggle
        </button>
        {show ? (
          <button onClick={updateColor}>
            Update Color
          </button>
        ) : null}
        <Animate
          show={show}

          start={{
            opacity: 0,
            backgroundColor: color,
          }}

          enter={{
            opacity: [1],
            timing: { duration: 1000, ease: easeExpInOut },
          }}

          update={{
            opacity: [1],
            backgroundColor: [color],
            timing: { duration: 500, ease: easeExpInOut },
          }}

          leave={[
            {
              backgroundColor: ['#ff0063'],
              timing: { duration: 500, ease: easeExpInOut },
            },
            {
              opacity: [0],
              timing: { delay: 500, duration: 500, ease: easeExpInOut },
            },
          ]}

          interpolation={(begValue, endValue, attr) => {
            if (attr === 'transform') {
              return interpolateTransformSvg(begValue, endValue)
            }

            return interpolate(begValue, endValue)
          }}
        >
          {({ opacity, backgroundColor }) => {
            return (
              <div style={{
                opacity,
                width: 200,
                height: 200,
                marginTop: 10,
                color: 'white',
                backgroundColor,
              }}
              >
                {opacity.toFixed(3)}
              </div>
            )
          }}
        </Animate>
      </div>
    )
  }
}

export default Example*/