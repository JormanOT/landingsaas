import styled from 'styled-components'
import { useRef, useState } from 'react'
import { Loader } from '../../../components'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { useFetchData } from '../../../hooks/useFetchData'
import DashboardServices from '../../../services'
import toast from 'react-hot-toast'
import { verifyImage } from '../../../constants'


const ClientImages = ({ images }) => {
    const inputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [reviewImages, setReviewImages] = useState(images);
    const [nameImageToDelete, setNameImageToDelete] = useState(null);
    const { FetchData } = useFetchData();


    const handleInputClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setLoading(true);
        const { header: { uploadReviewImages } } = DashboardServices;

        if (file) {

            const formData = new FormData();
            formData.append('image', file);

            const uploadImage = FetchData(uploadReviewImages(formData));

            toast.promise(uploadImage, {
                loading: 'Porfavor espere...',
                success: (response) => {
                    setLoading(false);
                    setReviewImages(response.imageReview)
                    return 'Imagen agregada.'
                },
                error: e => `${e.message}`,
            });
        }
    };

    // const handleModalDelete = (imageName) => {
    //     setNameImageToDelete(imageName)
    //     setModalDeleteImage(s => !s)
    // }

    const handleDeleteImage = (imageName) => {
        const { uploadReviewImages } = DashboardServices;

        const deleteImage = FetchData(uploadReviewImages({ type: 'delete', name: imageName }));

        toast.promise(deleteImage, {
            loading: 'Porfavor espere...',
            success: (response) => {
                setReviewImages(response.imageReview)
                return 'Imagen borrada.'
            },
            error: e => `${e.message}`,
        });
    }


    return (
        <>
            <Container>
                <input onChange={(e) => handleImageChange(e)} ref={inputRef} type="file" name="image" id="image" />

                <Images>

                    {reviewImages?.map((image, i) => (
                        <Image
                            deleteImg={handleDeleteImage}
                            imageName={image}
                            image={verifyImage(image)}
                            key={`image-${i}`}
                        />
                    ))}

                    {loading && (
                        <UploadContainer onClick={handleInputClick}>
                            <Loader />
                            <p>Subiendo</p>
                        </UploadContainer>
                    )}

                    {reviewImages?.length < 5 && (
                        <UploadContainer onClick={handleInputClick}>
                            <FaCloudUploadAlt color='black' size={'1.8rem'} />
                            <p>Subir</p>
                        </UploadContainer>
                    )}

                </Images>

            </Container>

            {/* {modalDeleteImage && (
                <Modal
                    title='¿ Seguro quieres eliminar la imagen ?'
                    titleButton='Eliminar Imagen'
                    subtitle={'Esta accion no se puede revertir'}
                    eject={handleDeleteImage}
                    showState={setModalDeleteImage}
                />
            )} */}
        </>
    )
}

const Image = ({ image, deleteImg, imageName }) => {
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(s => !s)
    }

    return (
        <ImageContainer
            onMouseLeave={handleHover}
            onMouseEnter={handleHover}>
            <img src={image} alt="imagen review" />
            {hover && (
                <HoverBackground >
                    <AiOutlineCloseCircle
                        color='white'
                        size='1.3rem'
                        onClick={() => deleteImg(imageName)}
                    />
                </HoverBackground>
            )}
        </ImageContainer>
    )
}

const Container = styled.div`
  position : relative;
  width : 100%;
  height : 120px;
  padding : 15px;
  border-radius : 5px;
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
  gap : 10px;

  input{
    display : none;
  }
`
const UploadContainer = styled.div`
  width : 100px;
  height : 100px;
  border : 1px dashed gray;
  border-radius : 15px;
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
  gap : 5px;
  transition : 0.4s ease all;

  :hover{
    background-color : var(--WhiteHover);
    cursor : pointer;
  }
`
const Images = styled.div`
  position : absolute;
  width : 98%;
  height : 100px;
  display : flex;
  flex-direction : row;
  align-items : center;
  justify-content : start;
  gap : 15px;
  top : 10px;
  left : 5px;
  border-radius : 15px;
`
const ImageContainer = styled.div`
  position : relative;
  width : 100px;
  height : 100px;

  img{
    width : 100%;
    height : 100%;
    object-fit : cover;
    border-radius : 15px;
  }
`
const HoverBackground = styled.div`
  width : 100%;
  height : 100%;
  background-color : rgba(0,0,0,0.4);
  position : absolute;
  top : 0;
  border-radius : 15px;

  svg{
    position : absolute;
    top : 5px;
    right : 5px;
  }

  :hover{
    cursor : pointer;
  }
`

export default ClientImages