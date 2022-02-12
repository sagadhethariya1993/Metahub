import { ProductCardV2 } from '../Components/Elements/Cards'

import {BrowserRouter} from 'react-router-dom'
import '../index.css'

export default {
    title:"ProductCards/Product Card V2",
    component: ProductCardV2,
}
const Template = args => <BrowserRouter><ProductCardV2 {...args} /></BrowserRouter>

export const V2 = Template.bind({})

