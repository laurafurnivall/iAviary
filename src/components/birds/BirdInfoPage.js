import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { BirdEdit } from './BirdEdit';
import "./Birds.css"
import { BirdInfo } from './BirdInfo';
import { BirdNotes } from './BirdNotes'

export const BirdInfoPage = () => {

  return <Tabs
    defaultActiveKey="info"
    id="fill-tab-example"
    className="mb-3"
    fill
  >
    <Tab eventKey="info" title="Information">
      <BirdInfo />
    </Tab>
    <Tab eventKey="edit" title="Edit Information">
      <BirdEdit />
    </Tab>
    <Tab eventKey="notes" title="Notes">
      <BirdNotes />
    </Tab>
    <Tab eventKey="weights" title="Weights">
      Weights and graph!
    </Tab>
  </Tabs>


}