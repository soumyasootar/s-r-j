import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FormComponent = () => {
  const [image, setImage] = useState(null);
  const [heading, setHeading] = useState('');
  const [paragraphs, setParagraphs] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
  };

  const handleParagraphsChange = (value) => {
    setParagraphs(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create form data object
    // const formData = new FormData();
    // formData.append('image', image);
    // formData.append('heading', heading);
    // formData.append('paragraphs', paragraphs);

    // try {
    //   // Send POST request to backend API
    //   const response = await fetch('/api/blog', {
    //     method: 'POST',
    //     body: heading,
    //   });

    //   if (response.ok) {
    //     console.log('Blog post submitted successfully');
    //     // Reset form fields
    //     setImage(null);
    //     setHeading('');
    //     setParagraphs('');
    //   } else {
    //     console.error('Failed to submit blog post');
    //   }
    // } catch (error) {
    //   console.error('Error occurred while submitting blog post:', error);
    // }
  };

  return (
    <Box maxWidth="500px" margin="auto"  bg={"white"} p={7} borderRadius={3}>
      <form onSubmit={handleSubmit}>
        <FormControl id="image">
          <FormLabel>Upload Image</FormLabel>
          <Input type="file" accept="image/*" onChange={handleImageUpload} />
        </FormControl>

        <FormControl id="heading" mt={4}>
          <FormLabel>Blog Heading</FormLabel>
          <Input type="text" value={heading} onChange={handleHeadingChange} />
        </FormControl>

        <FormControl id="paragraphs" mt={4}>
          <FormLabel>Paragraphs</FormLabel>
          <ReactQuill value={paragraphs} onChange={handleParagraphsChange} />
        </FormControl>

        <Button type="submit" mt={4} colorScheme="blue">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FormComponent;
