import { ProductCard } from '../Components/Elements/Cards'

import {BrowserRouter} from 'react-router-dom'
import '../index.css'

export default {
    title:"ProductCards/Product Card V1",
    component: ProductCard,
}
const Template = args => <BrowserRouter><ProductCard {...args} /></BrowserRouter>

export const V1 = Template.bind({})

