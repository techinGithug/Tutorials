import React, { Component } from 'react';
import moment from 'moment';
import { Formik, Field, Form, ErrorMessage } from 'formik';

class UpdateComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            id: this.props.match.params.id,
            description: 'Learn form',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    onSubmit = (values) => {
        // console.log("onSubmit : "+values)
    }

    validate = (values) => {
        let error = {}
        if(!values.description) {
            error.description = 'Please enter description'
        } else if(values.description.length < 5) {
            error.description = 'Please enter at least 5 charactor description'
        }

        if(!moment(values.targetDate).isValid) {
            error.description = 'Target date is not valid'
        }

        return error
    }
   
    render() { 
        let {description, targetDate } = this.state
       
        return (
            <div className="container">
                <h3>Update</h3>
                <Formik
                    initialValues = {{ description, targetDate }}
                    onSubmit = {this.onSubmit}
                    validateOnChange = {false}
                    validateOnBlur = {false}
                    validate = {this.validate}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description" />
                                    <label>Target date</label>
                                    <Field className="form-control" type="date" name="targetDate" />
                                </fieldset>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        );
    }
}
 
export default UpdateComponent;