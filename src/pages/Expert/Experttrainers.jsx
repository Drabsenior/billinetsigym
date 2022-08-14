import React from "react";
import "./Experttrainers.css";
import Trainers from "../../components/Trainers/Trainers";
import trainer1 from "../../assets/images/trainer1.png";
import trainer2 from "../../assets/images/trainer2.png";
import trainer3 from "../../assets/images/trainer3.png";
const Experttrainers = () => {
  return (
    <div className="experttrainerflexwrap">
      <h2 className="experttrainerstitle">Trainers</h2>
      <div className="experttrainerscontainer">
        <Trainers
          image={trainer1}
          qualify="Expert trainer"
          name="Hugh Jackman"
        />
        <Trainers image={trainer2} qualify="Expert trainer" name="Katy perry" />
        <Trainers
          image={trainer3}
          qualify="Expert trainer"
          name="Adam Sadnler"
        />
      </div>
    </div>
  );
};

export default Experttrainers;
