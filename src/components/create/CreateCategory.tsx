import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { nanoid } from 'nanoid';
import { Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import { CustomContext } from '@/context/ShoppingCard';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "587px",
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:'10px'
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const {categoryData, setCategoryData} = React.useContext(CustomContext)
    const handleOpen = () => setOpen(true);
    console.log("newCat=",categoryData)
    const handleClose = () => setOpen(false);
    const handleSubmit = (e:any)=>{
        e.preventDefault();
        const newCategory ={
            categoryId: nanoid(),
            categoryName: e.target.categoryName.value
        } 
        setCategoryData([...categoryData,newCategory]);

        handleClose();
    }
   
  return (
    <div>
      <Button onClick={handleOpen} sx={{backgroundColor:"green", color:"#fff"}}>Create category</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} p={"16px 24px"}>
                <Box onClick={handleClose}><CloseIcon/></Box>
                <Typography sx={{fontSize:"24px" , fontWeight:700}}>Хоолны төрөл нэмэх</Typography>
                <Box></Box>
            </Stack>
          <form onSubmit={handleSubmit}>

            <Stack p={"24px"} spacing={2}>
                <label htmlFor="">Нэмэх төрлийн нэр:</label>
                <TextField name='categoryName' id="createCategory" variant="outlined" placeholder='Төрөл нэмэх'/>

            </Stack>
            <Stack direction={"row"} justifyContent={"flex-end"} spacing={4} p={"24px"}>
                <input type="submit" value="Нэмэх" className='catergoryBtn'/>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
