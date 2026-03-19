import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: '../../public/squirrel_photos-speakers-4109274.jpg',
        name: "Speakers",
        cost: 35,
        quantity: 0,
    },
    {
        img: '../../public/lograstudio-public-speaking-3926344_1280.jpg',
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: '../../public/mnplatypus-whiteboard-2903269_1280.png',
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },
    {
        img: '../../public/publicdomainpictures-business-20031.jpg',
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: '../../public/geralt-signpost-235079.jpg',
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
