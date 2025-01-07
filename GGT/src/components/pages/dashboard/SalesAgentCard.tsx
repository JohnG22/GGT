
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// LIBRARIES
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
import { FC } from 'react';


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// CSS
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
import './SalesAgentCard.css';


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// TYPES & INTERFACES
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
interface SalesAgentCardProps {
  username: string;
  telephone: string;
  location: string;
}


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// SalesAgentCard - Component
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
const SalesAgentCard: FC<SalesAgentCardProps> = ({ username, telephone, location }) => {
  
  // View__________________________________________________________________________________________
  return (
    <div className="sales_agent_card basic_padding">
      <div className="sales_agent_card_col sales_agent_colored">
        <div className="card_content">
          <div className="icon_wrapper">
            <img src="sales_agent.png" alt="Sales Agent" />
          </div>
          <div className="text_content">
            <span className="label">Obchodní zástupce:</span>
            <span className="info">{username}</span>
            <span className="info">tel. {telephone}</span>
          </div>
        </div>
      </div>
      
      <div className="sales_agent_card_col sales_agent_colored_right">
        <div className="card_content">
          <div className="icon_wrapper">
            <img src="location.png" alt="Location" />
          </div>
          <div className="text_content">
            <span className="info">{location}</span>
          </div>
          <div className="icon_wrapper arrow">
            <img src="arrow_down.png" alt="Expand" />
          </div>
        </div>
      </div>
    </div>
  );

};

export default SalesAgentCard;