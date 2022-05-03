import React from 'react';
import { useForm } from 'react-hook-form';
import { MapContainer,TileLayer,Marker, Popup } from 'react-leaflet';
import marker from '../../images/marker.svg';
import Leaflet from 'leaflet';

import './contacts.scss'

function Contacts() {
  const {register, 
    formState:{errors, isValid},
    handleSubmit,
    reset
  } = useForm({
    mode:'onBlur'
  }); 

  const onSubmit = (data) =>{
    alert(JSON.stringify(data));
    reset();
  }

  const position = [42.698660614419616, 77.36402160583395];

  const icon = Leaflet.icon({
    iconUrl: marker,
    iconAnchor: position, 
    iconSize:[55,55]
  })


  return (
    <section className="contacts">
        <h1>Our Contacts</h1>
        <div className="container contacts__container">
          <div className="contacts__col">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Your Name
                <input placeholder="Shairgul Imarova" 
                {...register('name', {
                  required: "Fill in your name",
                  minLength:{
                    value:3,
                    message:"At least 3 symbols"
                  },
                })}
                />
              </label>
              <div className="contacts__error">
                {errors?.name && <p>{errors?.name?.message || "Error!"} </p>}
              </div>
              <label>
                Your Email
                <input placeholder="test@test.com"{...register('email', {
                  required: "Fill in your email",
                  pattern:{
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                    message:"Email should be fill in correctly!"
                  }
                })}
                 />
              </label>
              <div className="contacts__error">
              {errors?.email && <p>{errors?.email?.message || "Error!" }</p>}
              </div>
              <label>
                Your Message
                <textarea {...register("msg", {
                  maxLength:{
                    value: 10,
                    message: "Maximum 10 symbols"
                  },
                })}></textarea>
              </label>
              <div className="contacts__error">
              {errors?.msg && <p>{errors?.msg?.message} || "Error!" </p>}
              </div>
              <input type="submit" disabled={!isValid} />
            </form>
          </div>

          <div className="contacts__col">
          <MapContainer center={position} zoom={20}>
          <TileLayer
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />  
         <Marker position={position} icon={icon}>
          <Popup>
            I live in here!
          </Popup>
        </Marker>          
            </MapContainer>
          </div>

        </div>
    </section>
  )
}

export default Contacts