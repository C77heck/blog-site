import React from 'react';


function Product() {
    return (
        <div class=' grid-container'>
                <form action="/buying" method="post">
                    <div class='productsCont grid-item'>
                        <div class="picDiv">
                            <img class="productImg" src="images/Apple juice.png" />
                        </div>
                        <input type="text" class="productName" readonly name="productName" value="product name" />

                        <hr class="hrProduct" />
                        <div class="bottomProduct">
                            <p class="unit">product unit variable place</p>
                            <input type="text" class="price" readonly name='price' value="product price" />

                            <input type="text" hidden name="id" value="product id place" />
                            <input type="number" name="amount" min="1" class="amountInp" maxlength="2" value="1" />
                            <button class="addB">+</button>
                        </div>
                    </div>
                </form>
    </div>
    )
}

export default Product;