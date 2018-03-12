import React, { Component } from 'react';

const withClass = (WrappedComponent, className) => {
    /* Functional Component (Stateless) */
    // return (props) => (
    //     <div className={className}>
    //         <WrappedComponent {...props} />
    //     </div>
    // )

    /* Class-Based Component (Stateful) */
    return class extends Component {
        render () {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
};

export default withClass;
