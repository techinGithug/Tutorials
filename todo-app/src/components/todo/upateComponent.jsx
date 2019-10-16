import React, { Component } from 'react';
import moment from 'moment';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import TodoDataService from '../../api/todo/TodoService.js';

class UpdateComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    onSubmit = (values) => {
        // console.log("onSubmit : "+values)
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if(this.state.id === -1) {
            TodoDataService.postTodo(todo)
            .then( (res) => this.props.history.push('/todos') )
        } else {
            TodoDataService.updateTodo(this.state.id, todo)
            .then( () => this.props.history.push('/todos') )
        }
    }

    componentDidMount = () => {
        TodoDataService.editTodo(this.state.id)
        .then( res => this.setState({
            description: res.data.description,
            targetDate: moment(res.data.targetDate).format("YYYY-MM-DD")
        }) )
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
                <h3>Todo</h3>
                <Formik
                    initialValues = {{ description, targetDate }}
                    onSubmit = {this.onSubmit}
                    validateOnChange = {false}
                    validateOnBlur = {false}
                    validate = {this.validate}
                    enableReinitialize = {true}
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
                                <button type="submit" className="btn btn-primary btn-sm">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        );
    }
}
 
export default UpdateComponent;