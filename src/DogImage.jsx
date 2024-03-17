// @ts-check

// TSじゃない認識なんだが、裏で実は肩チェックしてる?
export const DogImage = ({ imageUrl }) => {
  return (
    <>
      <p><img src={imageUrl} alt="サンプル画像"/></p>
    </>
  )
}

export default DogImage
