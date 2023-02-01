import { oneOf } from "prop-types";
import Button from "./Button";
export default {
    title: 'Button',
    component: Button,
    argTypes: {
        lable: { control: 'text' },
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
        padding: { control: 'number', defaultValue: 6 },
        size: {
            control: {
                type: 'radio',
            },
            options: ['Small', 'Medium', 'Large'],
        },

    }

}
const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    lable: 'Primary',
    backgroundColor: 'pink',
    color: 'black',
    size: 'Medium'
}
export const Secondary = Template.bind({})
Secondary.args = {
    lable: 'Secondary',
    backgroundColor: 'white',
    color: 'black',
    size: 'Large'
}
export const Text = Template.bind({})
Text.args = {
    lable: 'Text',
    backgroundColor: 'white',
    color: 'black',
    size: 'Small'


}