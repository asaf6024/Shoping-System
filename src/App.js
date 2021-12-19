import React, { useState, useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

//obj
import products from './dist/products'

//components
import SendMessage from './components/SendMessage/SendMessage';
import Items from './components/Items/Items';

//css
import './App.css';
import 'react-tabs/style/react-tabs.css'

function App() {

  const [fridge, setFridge] = useState([])
  const [kitchen, setKitchen] = useState([])
  const [vegetables, setVegetables] = useState([])
  const [candies, setCandies] = useState([])
  const [frozen, setFrozen] = useState([])
  const [clean, setClean] = useState([])
  const [reservation, setReservation] = useState([])
  const [modalShow, setModalShow] = useState(false)

  useEffect(() => {

    // console.log('products', products)

    let productsFromStorage = JSON.parse(localStorage.getItem('reservation'))
    if (productsFromStorage != null) {

      setFridge(products[0])
      setKitchen(products[1])
      setVegetables(products[2])
      setCandies(products[3])
      setFrozen(products[4])
      setClean(products[5])
    }
    else {
      setFridge(products.fridge)
      setKitchen(products.kitchen)
      setVegetables(products.vegetables)
      setCandies(products.candies)
      setFrozen(products.frozen)
      setClean(products.clean)
    }

  }, [])

  const saveReservation = (e) => {
    e.preventDefault();
    setReservation([
      fridge,
      kitchen,
      vegetables,
      candies,
      frozen,
      clean
    ], () => {

    })

    localStorage.setItem('reservation', JSON.stringify([
      fridge,
      kitchen,
      vegetables,
      candies,
      frozen,
      clean
    ]))
    setModalShow(true)
  }

  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol sm='12'>
            <h1 className='text-center'>רשימת קניות</h1>

            <SendMessage
              saveReservation={saveReservation}
              reservation={reservation}
              setModalShow={setModalShow}
              modalShow={modalShow}
            />

            <Tabs>
              <TabList>
                <Tab>מוצרי חלב וקירור</Tab>
                <Tab>מוצרים למטבח</Tab>
                <Tab>ירקות</Tab>
                <Tab>ממתקים</Tab>
                <Tab>קפואים</Tab>
                <Tab>חומרי ניקוי ורחצה</Tab>
              </TabList>

              <TabPanel>
                <h2 className='text-center'> מוצרי חלב וקירור</h2>
                <Items
                  headline={'מוצר חלב'}
                  setItems={setFridge}
                  items={fridge}
                />

              </TabPanel>

              <TabPanel>
                <h2 className='text-center'>מוצרים למטבח</h2>
                <Items
                  headline={'מוצר למטבח'}
                  setItems={setKitchen}
                  items={kitchen}
                />
              </TabPanel>

              <TabPanel>
                <h2 className='text-center'>ירקות</h2>
                <Items
                  headline={'ירק'}
                  setItems={setVegetables}
                  items={vegetables}
                />
              </TabPanel>

              <TabPanel>
                <h2 className='text-center'>ממתקים</h2>
                <Items
                  headline={'ממתק'}
                  setItems={setCandies}
                  items={candies}
                />
              </TabPanel>

              <TabPanel>
                <h2 className='text-center'>קפואים</h2>
                <Items
                  headline={'קפואים'}
                  setItems={setFrozen}
                  items={frozen}
                />
              </TabPanel>

              <TabPanel>
                <h2 className='text-center'>חומרי ניקוי ורחצה</h2>
                <Items
                  headline={'מוצר נקיון ורחצה'}
                  setItems={setClean}
                  items={clean}
                />
              </TabPanel>

            </Tabs>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default App;
