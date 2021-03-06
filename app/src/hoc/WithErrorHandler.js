import React, {Component} from 'react';

import Modal from './../widgets/Modal/';
import Aux from './AuxHOC';

export default function WithErrorHandler(WrappedComponent, axios) {
    return class extends Component {
        state = {
            error: null
        };

        componentWillMount() {
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            axios.interceptors.response.use(response => response, error => {
                this.setState({error: error})
            });
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        };

        render () {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        clicked={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                        {/*Something didn't work*/}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
};
