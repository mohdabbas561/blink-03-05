import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [shippingData, setData] = useState({
    fullname: "",
    mobile: "",
    pincode: "",
    city: "",
    state: "",
    street: "",
  });

  const [isPaid, setIsPaid] = useState(false);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);

  const handleToken = (token) => {
    // Send the token to your server to process the payment
    console.log(token);
    setIsPaid(true);
  };

  if (isPaid) {
    // Redirect the user to the thank you page after payment is completed
    navigate("/ThankYouPage");
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...shippingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(shippingData);
    setToggle(!toggle);
  };

  const getPincodeData = async (e) => {
    if (e.target.value.length === 6) {
      const resp = await fetch(
        `https://api.postalpincode.in/pincode/${e.target.value}`
      );
      const pinData = await resp.json();

      if (pinData[0].Status === "Success") {
        setData({
          ...shippingData,
          state: pinData[0].PostOffice[0].State,
          city: pinData[0].PostOffice[0].District,
          pincode: e.target.value,
        });
      } else if (pinData[0].Status !== "Success") {
        alert("Enter Correct PinCode");
        setData({
          ...shippingData,
          state: "",
          city: "",
          pincode: "",
        });
      }
    }
  };

  return (
    <>
    <div style={{alignItems: "center",
  display: "flex",
  justifyContent: "center"}}>
      <Box
        padding={"15px"}
        width={"70%"}
        marginTop={{ base: "60px", md: "90px", lg: "56px" }}
      >
        <Box >
        <Heading style={{marginBottom:"50px", marginTop:"-60px"}} fontSize={{ base: '22px', md: '40px', lg: '30px' }}>
      {toggle ? '' : 'Payment'}
    </Heading>
    <Text
     // borderBottom="1px solid green"
      width="fit-content"
      fontSize={{ base: '22px', md: '40px', lg: '30px' }}
      fontWeight={{ base: '600', md: '40px', lg: '56px' }}
      onClick={handleSubmit}
      cursor="pointer"
    >
      {toggle ? '' : 'Edit Address'}
    </Text>
  </Box>
        <Box
          fontWeight={{ base: "600", md: "40px", lg: "56px" }}
          fontSize={{ base: "16", md: "26", lg: "26px" }}
        >
          {/* <Text>
            {toggle
              ? "Home Delivery"
              : `${shippingData.fullname},${shippingData.street} ${shippingData.city},${shippingData.state},${shippingData.pincode}`}
          </Text>
          <Text>
            {toggle
              ? "Get your product delivered to your Home"
              : `Mobile Number: +91${shippingData.mobile}`}
          </Text> */}
        </Box>
        <Box
    fontWeight={{ base: '600', md: '40px', lg: '56px' }}
    fontSize={{ base: '16', md: '26', lg: '26px' }}
  >
    <Text>
      {toggle ? '' : `${shippingData.fullname}, ${shippingData.street}, ${shippingData.city}, ${shippingData.state}, ${shippingData.pincode}`}
    </Text>
    <Text style={{marginBottom:"50px"}}>
      {toggle ? '' : `Mobile Number: +91${shippingData.mobile}`}
    </Text>
  </Box>
  <Box display={{ base: 'block', md: 'flex', lg: 'flex' }} width={'95%'} justifyContent={'space-between'} margin={'auto'}>
    {toggle ? (
      <Box width={{ base: '95%', md: '50%', lg: '60%' }}>
        {/* <Text
          textAlign={'center'}
                fontSize={{ base: "16", md: "26", lg: "25" }}
                //borderBottom="1px solid green"
                fontWeight={700}
              >
                Add new address
              </Text> */}
              <form onSubmit={handleSubmit} style={{backgroundColor:"white" , padding:'30px 30px 10px 30px' , borderRadius:"10px", marginTop:"-150px"}}>
                <Box>
                  <Box>

                    <br />
                    <Box borderBottom={"1px solid #f8983a"}>
                      <input
                        style={{ width: "100%" , textAlign: "center", padding:"5px"}}
                        placeholder="Enter Your Name"
                        onChange={handleChange}
                        value={shippingData.fullname}
                        name="fullname"
                        type="text"
                        color="blue"
                        required
                      />
                    </Box>
                  </Box>
                  <Box>

                    <br />
                    <Box borderBottom={"1px solid #f8983a"}>
                      <input
                        style={{ width: "100%" , textAlign: "center" , padding:"5px"}}
                        placeholder="Enter mobile Number"
                        value={shippingData.mobile}
                        onChange={handleChange}
                        name="mobile"
                        type="number"
                        color="black"
                        required
                      />
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box>

                    <br />
                    <Box borderBottom={"1px solid #f8983a"}>
                      <input
                        style={{ width: "100%" ,textAlign: "center" , padding:"5px" }}
                        placeholder="Enter Your Pincode"
                        name="pincode"
                        disabled={false}
                        onChange={getPincodeData}
                        color="black"
                        type="number"
                        required
                      />
                    </Box>
                  </Box>
                  <Box>

                    <br />
                    <Box borderBottom={"1px solid #f8983a"}>
                      <input
                      style={{ width: "100%" , textAlign: "center" , padding:"5px"}}
                        type="text"
                        disabled={true}
                        name="city"
                        readOnly
                        value={shippingData.city}
                        placeholder="Waiting for City"
                        color="black"
                        required
                      />
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box>

                    <br />
                    <Box borderBottom={"1px solid #f8983a"}>
                      <input
                        style={{ width: "100%",  textAlign: "center", padding:"5px"}}
                        type="text"
                        color="black"
                        disabled={true}
                        name="state"
                        readOnly
                        value={shippingData.state}
                        placeholder="Waiting for State"
                        required
                      />
                    </Box>
                  </Box>
                  <Box>

                    <br />
                    <Box borderBottom={"1px solid #f8983a"}>
  <input
    style={{ width: "100%", textAlign: "center"  , padding:"5px"}}
    type="text"
    name="street"
    onChange={handleChange}
    value={shippingData.street}
    placeholder="Enter your Street Details"
    color="black"
  />
</Box>

                  </Box>
                </Box>
                <Box >
                  <input
                    style={{
                      backgroundColor: "#F6AD55",
                      
                      marginBottom:"40px",
                    
                      cursor: "pointer",
                      color: "black",
                      padding: "11px",
                      borderRadius: "10px",
                      fontWeight: 600,
                      marginTop: 10,
                    }}
                    type="submit"
                    value="ADD ADDRESS & CONTINUE"
                  />
                </Box>
              </form>
            </Box>
          ) : (
            <StripeCheckout
              style={{ marginBottom: "60px" , marginTop :"50px"}}
              token={handleToken}
              stripeKey="pk_test_51N1RdtSGJ3QNgFBVKw8PfVmT7bo6wOWPKZIOONpNrO776IhcPLOYJFsu5qmtYo9x2fL3wtFlAG17V5lY7ZBM4AaK00QicENFJI"
              amount={1000} // amount in cents
              name="My Awesome Store"
              description="Purchase Description"
              shippingAddress
              billingAddress
            />
          )}
        </Box>
      </Box>
      </div>
    </>

  );
};

export default CheckoutPage;
