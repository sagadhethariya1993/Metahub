import { ProductCard } from '../Components/Elements/Cards'
import { Grids } from '../Components/Elements/HOC'
import {BrowserRouter} from 'react-router-dom'
import '../index.css'

export default {
    title:"Grids/Product V1",
    component: ProductCard,
    argTypes: {
        numberOfChildren: { type: "number", defaultValue: 4 },

      },
}
const Template = args => <BrowserRouter> 
<Grids {...args}>

{[...Array(4).keys()].map(n => (
      <ProductCard key={n}/>
    ))}
</Grids>
</BrowserRouter>

export const Grid2 = Template.bind({})
Grid2.args ={
    col:'2',

}




export const Grid4 = Template.bind({})
Grid4.args ={
    col:'4',
    
}