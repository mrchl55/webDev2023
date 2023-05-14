import './index.css';
import contactModel from '../../models/Contact.model';
import Heading from "../../components/heading/index.jsx";
import Text from "../../components/text/index.jsx";
import Form from "../../components/form/index.jsx";
import FormInput from "../../components/formInput/index.jsx";
import {useState} from "react";
import Button from "../../components/button/index.jsx";

const Contact = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [services, setServices] = useState('')
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
    }
    return (
        <div className="contact">
            <div className="container">
                <div className="content">
                    <Heading level={2}>
                        {contactModel.heading}
                    </Heading>
                    <Text>
                        {contactModel.text}
                    </Text>
                </div>
                <div className="contact-form">
                    <Form onSubmit={onSubmitHandler}>
                        <FormInput
                            name='firstName'
                            placeholder='First Name'
                            value={firstName}
                            setValue={setFirstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <FormInput
                            name='lastName'
                            placeholder='Last Name'
                            value={lastName}
                            setValue={setLastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />

                        <FormInput
                            name='phone'
                            placeholder='Phone Number'
                            value={phoneNumber}
                            setValue={setPhoneNumber}
                            type='tel'
                            style='full'
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <FormInput
                            name='service'
                            placeholder='What Service are you interested in?'
                            value={services}
                            setValue={setServices}
                            style='full'
                            onChange={(e) => setServices(e.target.value)}
                        />
                        <Button type="submit" text="SUBMIT NOW" theme="red"/>
                    </Form>
                </div>
            </div>
        </div>

    )
};

export default Contact;
