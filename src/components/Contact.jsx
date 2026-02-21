
import React from 'react'
import IconList from './IconList'
import { LuPhoneCall } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import Map from './Map';
import TextWrapAnimation from './TextWrapAnimation';
import css from "../CSS/HomePage/Contact.module.css"

const Contact = () => {
  return (
    <div className={css.Contact}>


      <div className={`${css.contact_container} container`}>

        <div className={css.contact_top}>
          <TextWrapAnimation />

          <p>Fill out this form to get started. Whether you have a script ready or just an idea, this helps us understand your goals, timeline, and vision so we can recommend the best approach and give you an accurate quote for your video.</p>

          <div className={css.icon_list_Wrapper}>
            <IconList icon={<LuPhoneCall color='#ef5527' size={25} />} text={"+447956305106"} />
            <IconList icon={<IoIosMail color='#ef5527' size={25} />} text={"hello@motionwizz.com"} />
            <IconList icon={<FaMapLocationDot color='#ef5527' size={25} />} text={"BASE, Greenheys Ln, Manchester M15 6LR, United Kingdom"} />
          </div>

          <Map />
        </div>


        <div className={css.right_side_contact}>

          <form action="">

            <div className={css.inputs}>
              <div className={css.input}>
                <label htmlFor="">First Name</label>
                <input type="text" placeholder='First Name' />
              </div>
              <div className={css.input}>
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder='Last Name' />
              </div>
            </div>

            <div className={css.input}>
              <label htmlFor="">Email</label>
              <input type="text" placeholder='Email' />
            </div>

            <div className={css.inputs}>
              <div className={css.input}>
                <label htmlFor="">Industry</label>
                <select name="" id="">
                  <option value="Industry" defaultChecked>Select Industry</option>
                  <option value="Educational">Educational</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Portfolio">Portfolio</option>
                  <option value="Fintech">Fintech</option>
                  <option value="Crypto">Crypto</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={css.input}>
                <label htmlFor="">Budget</label>
                <select name="" id="">
                  <option value="" defaultChecked disabled hidden>Select Budget Range</option>
                  <option value="1k-5k">$1K - $5K</option>
                  <option value="5k-10k">$5K - $10K</option>
                  <option value="10k-25k">$10K - $25K</option>
                  <option value="25k-50k">$25K - $50K</option>
                  <option value="50k+">$50K+</option>
                </select>
              </div>
            </div>

            <div className={css.input}>
              <label htmlFor="">Comments</label>
              <textarea placeholder='Tell us about your project...'></textarea>
            </div>

            <button type="submit" className={css.submit_btn}>Get a Quote</button>

          </form>

        </div>

      </div>
    </div>
  )
}

export default Contact

