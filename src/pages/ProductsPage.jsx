import React from 'react'
import { useSelector } from 'react-redux'

function ProductsPage() {

    //use selector ile global state e erişiyorum!!
    var { productReducer } = useSelector(state => state)

    return (<>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    productReducer.map((item, key) => {
                        return <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>
    )
}

export default ProductsPage