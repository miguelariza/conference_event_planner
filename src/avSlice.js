import { createSlice } from "@reduxjs/toolkit";
import imgSpeaker from './assets/squirrel_photos-speakers-4109274.jpg';
import imgMicro from './assets/lograstudio-public-speaking-3926344_1280.jpg';
import imgWhite from './assets/mnplatypus-whiteboard-2903269_1280.png';
import imgProj from './assets/publicdomainpictures-business-20031.jpg';
import imgSign from './assets/geralt-signpost-235079.jpg';

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: imgSpeaker,
        name: "Speakers",
        cost: 35,
        quantity: 0,
    },
    {
        img: imgMicro,
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: imgWhite,
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },
    {
        img: imgProj,
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: imgSign,
        name: "Signage",
        cost: 80,
        quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if(item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if(item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
