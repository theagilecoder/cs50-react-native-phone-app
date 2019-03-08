import React from 'react';
import { SectionList, Text } from 'react-native';
import PropTypes from 'prop-types';
import Row from './Row'

// These two are declared here because they will be declared only once
// and then can be reused in SectionList component. Otherwise, they 
// would be instantiated every time SectionList is rendered.
const renderItem = obj => <Row {...(obj.item)} />

const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

const ContactsList = props => {

  // this is the new contacts by letter with the shape as
  // { 'A' : [contact1, contact2], 'B' : contact3, contact4], ...}
  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    }
  }, {})

  // Now we need to convert it to the shape as required in SectionList
  // Object.keys(contactsByLetter) grabs all the alphabets in an array
  // and prepares the object to be consumed
  const sections = Object.keys(contactsByLetter).sort().map(letter => ({
    title: letter,
    data: contactsByLetter[letter],    
  }))

  return (
    <SectionList 
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      sections={sections}
    /> 
  )
}

ContactsList.propTypes = {
  renderItem: PropTypes.func,
  renderSectionHeader: PropTypes.func,
  contacts: PropTypes.array,
}

export default ContactsList