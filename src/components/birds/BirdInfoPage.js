import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./Birds.css"
import { BirdInfo } from './BirdInfo';
import { BirdNotes } from './BirdNotes'
import { BirdWeights } from './BirdWeights';

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
    <Tab eventKey="notes" title="Notes">
      <BirdNotes />
    </Tab>
    <Tab eventKey="weights" title="Weights">
      <BirdWeights />
    </Tab>
  </Tabs>


}