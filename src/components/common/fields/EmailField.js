import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Label, Input, FormGroup, FormFeedback
} from 'reactstrap';

import ValidatorService from '../../../services/validator';

class EmailField extends Component {
    static propTypes = {
        control: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    validateInput() {
        if (!this.props.value) {
            return null;
        }
        return ValidatorService.validateEmail(this.props.value) ? 'success' : 'error';
    }

    handleChange({target}) {
        if (this.props.value === target.value) {
            return;
        }
        this.props.onChange({target});
    }

    render() {
        const {control, label, value} = this.props;
        return (
            <FormGroup controlId={control} validationState={this.validateInput()}>
                <Label>
                    {label}
                </Label>
                <Input type="email" value={value} required onChange={e => this.handleChange(e)}/>
                <FormFeedback/>
            </FormGroup>
        );
    }
}

export default EmailField;
