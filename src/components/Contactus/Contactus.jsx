

import { InputField, TextField } from "../Form/Form"
import { GradientButton } from "../Utility/Button"

const ContactUs = () => {
    return (
        <div className="max-w-7xl w-full mx-auto flex items-center flex-col md:flex-row px-5 pb-10" id='contact'>
            <div className="flex-1">
                <img className="max-w-full max-h-[400px] mx-auto" src='/images/woman designer.png' />
            </div>
            <div className="flex-1 mt-10 md:mt-0">
                <h3 className="font-medium text-2xl mb-4 text-white">Get a qoute in <span className="text-red-600">24</span> hours</h3>
                <div className="flex gap-5">
                    <InputField
                        label='Your Good Name'
                        placeholder='John Doe'
                    />
                    <InputField
                        label='Contact Number'
                        placeholder='+9******'
                    />
                </div>
                <InputField
                    label='Your E-Mail'
                    placeholder='example@gmail.com'
                />
                <TextField
                    label='Message'
                    placeholder='Hi, I am looking to Design/Develop Website/Mobile App for my 
                    business/Shop/Office or for my personal Use.'
                />
                <div className="flex">
                    <GradientButton
                        className='px-8'
                    >
                        <span className="flex gap-2">
                            <img src="/images/icons/send-icon.svg" />
                            Send
                        </span>
                    </GradientButton>
                </div>
            </div>
        </div>
    )
}

export default ContactUs