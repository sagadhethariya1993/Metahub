import { Button } from '../Components/UI'

import '../index.css'

export default {
    title:"Buttons/Button",
    component: Button,
    argTypes: { onClick: { action: "onClick" } },
}
const Template = args => <Button {...args} >Test</Button>

export const HoverBtn = Template.bind({})
HoverBtn.args = {
  className: "btn-dark waves-effect waves-button waves-float waves-light"
}

export const SmallButton = Template.bind({})
SmallButton.args = {
  className: "btn-small-wide btn-dark waves-effect waves-button waves-float waves-light"
}
