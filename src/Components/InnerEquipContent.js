import React from 'react'
import { View, Text } from "react-native";

export default class InnerEquipContent extends React.Component {
    displayContent = (value) => {
        switch (true) {
            case value === 'HAEMODIALYSIS MACHINE':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text style={{ fontSize: 18 }}>
                            This is a biomedical equipment that is concerned with the removal of waste from the body, purification of blood through filtration when the kidney is damaged.
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            FUNCTIONS {'\n'}
                        </Text>
                        <Text>
                        o	It helps in the removal of waste and discharge from the body of a person when the kidney is not functioning properly{'\n'}
                        o   It also helps get your electrolytes and minerals to their proper levels in your body

                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            PRINCIPLE OF OPERATION {'\n'}
                        </Text>
                        <Text>It works with the principle of diffusion and ultrafiltration</Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            MODE OF OPERATION {'\n'}
                        </Text>
                        <Text>
                            Before the machine is used on the patient the blood line Is primed with the aid of a saline solution. The machine pumps blood from the patient through the arterial blood line and then moves, heparin pump is made available of which heparin is administered at interval to prevent blood from clotting. The blood then moves into the dialyzer at the center and then the dialysate which comprises of the bicarbonate, peamate and acid moves in from the side and settles. The blood and the dialysate do not mix as a result of the microfibers present in the dialyser. Now waste from the blood diffuses into the dialysate of which they would be exchange of ions and after that pure blood is gotten as well as the minerals needed will now move through the venous line and back to the patient's body. The waste gotten will be disposed at the reserved jar provided.
                        </Text>
                    </View>
                );
                break;
            case value === 'ANAESTHETIC MACHINE':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text>
                            Anaesthetic machine (or anesthesia machine in America) is used by anesthesiologists and nurse anesthetists to support the administration of anesthesia. The most common type of anesthetic machine is the continuous-flow anesthetic machine, which is designed to provide an accurate and continuous supply of medical gases (such as oxygen and nitrous oxide), mixed with an accurate concentration of anesthetic vapour (such as halothane or isoflurane), and deliver this to the patient at a safe pressure and flow. Modern machines incorporate a ventilator, suction unit, and patient monitoring devices.
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            MODE OF OPERATION {'\n'}
                        </Text>
                        <Text>
                            Oxygen (O2), nitrous oxide (N2O) and sometimes air sources are connected to the machine. Through gas flowmeters (or rotameters), a controlled mixture of these gases along with anaesthetic vapour passes through a vaporizer and is delivered to the patient. Sometimes a ventilator is also connected with the machine for rebreathing thus making it a closed circuit. With ventilators or a re-breathing patient circuit, soda lime canisters are used to absorb the exhaled carbon dioxide and fresh gases are added to the circuit for reuse. Pressure gauges are installed on the anaesthesia machine to monitor gas pressure. Generally, 25% (or 21%) oxygen is always kept in the circuit (delivered to patient) as a safety feature.  The device which ensures this minimum oxygen in the circuit is called a hypoxic guard. Some basic machines do not have this feature, but have a nitrous lock which stops the delivery of N2O in absence of O2 pressure. Machines give various alarms to alert operators.  
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            MAINTENANCE OF ANAESTHETIC MACHINE {'\n'}
                        </Text>
                        <Text>
                        •	Replace sodalime if it has changed color{'\n'}
                        •	After use, depressurize system and replace caps or covers{'\n'}
                        •	Replace any deteriorated hoses and tubings{'\n'}
                        •	Always check pressure guage rise when next used.{'\n'}

                        </Text>
                    </View>
                );
                break;
            case value === 'INFANT INCUBATOR':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text>
                        An infant incubator is a closed chamber in which a controlled environment is provided to the premature or critically ill baby. The user can select the appropriate temperature, humidity and oxygen level suitable for the baby.
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            MODE OF OPERATION {'\n'}
                        </Text>
                        <Text>
                        The general principle is that air is processed before it reaches baby. An electric fan draws room air through a bacterial filter which removes dust and bacteria. The filtered air flows over an electric heating element. The filtered and heated air then passes over a water tank where it is moistened. It then flows on to the incubator canopy. The incubator canopy is slightly pressurized. This allows expired carbon dioxide to pass back into the room via the vent holes and most of the air to be re-circulated. It also prevents unfiltered air entering the system.
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            MAINTENANCE OF INCUBATOR {'\n'}
                        </Text>
                        <Text>
                        •	Cleaning : Wipe dust off exterior and cover equipment after checks   Remove any tape, paper or foreign body from equipment 
                        •	  Visual checks:Check all fittings and accessories are mounted correctly   Function checks:  Drain off the water tray. Run machine for 30 minutes to dry the tray. Refill tray with sterile water just before re-use.

                        </Text>
                    </View>
                )
                break;
                case value === 'NEBULIZER':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text>
                        A nebulizer is a device used to administer medication in the form of a mist inhaled into the lungs. Nebulizers are commonly used for treatment of cystic fibrosis, asthma and other respiratory diseases.  The reason for using a nebulizer for medicine to be administered directly to the lungs is that small aerosol droplets can penetrate into the narrow branches of the lower airways. Large droplets would be absorbed by the mouth cavity, where the clinical effect would be low.
                        </Text>
                    </View>
                )
                break;
                case value === 'AUTOCLAVE':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text>
                        Sterilization is the killing of microorganisms that could harm patients.  It can be done by heat (steam, air, flame or boiling) or by chemical means.  Autoclaves use high pressure steam and sterilizers use boiling water mixed with chemicals to achieve this.  Materials are placed inside the unit for a carefully specified length of time.  Autoclaves achieve better sterilization than boiling water sterilizers. 
                        </Text>
                    </View>
                )
                break;
                case value === 'CENTRIFUGE':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                    </View>
                )
                break;
                case value === 'SUCTION MACHINE':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text>
                        Suction machines (also known as aspirators) are used to remove unwanted fluid from body cavities.  They are found in operating theatres, delivery suites, ENT and emergency departments.  Smaller specialised suctions are used in dental departments. 
                        </Text>
                    </View>
                )
                break;
                case value === 'OXYGEN CONCENTRATOR':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text>
                        An oxygen concentrator draws in room air, separates the oxygen from the other gases in the air and delivers the concentrated oxygen to the patient. When set at a rate of two litres per minute, the gas that is delivered by the concentrator is more than 90% oxygen.  It is used for situations where bottled gas supply is impractical or expensive, and can be used by patients in the hospital or the home.
                        </Text>
                    </View>
                )
                break;
                case value === 'INFANT RADIANT WARMER':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                    </View>
                )
                break;
                case value === 'ENDOSCOPE':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text>
                        Endoscopy means looking inside the body using an endoscope, an instrument used to examine the interior of a hollow organ or cavity of the body.  Endoscopes are inserted directly into the organ.
                        An endoscope can consist of a rigid or flexible tube, a light delivery system (light source), an optical fibre system, a lens system transmitting the image to the viewer, an eyepiece and often an additional channel to allow entry of medical instruments, fluids or manipulators.
                        There are many different types of endoscopy, including arthroscopy, bronchoscopy, colonoscopy, colposcopy, cystoscopy, laparoscopy and laryngoscopy.

                        </Text>
                    </View>
                )
                break;
                case value === 'ULTRASOUND':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text>
                        Diagnostic ultrasound machines are used to give images of structures within the body.  This chapter does not deal with other kinds of machine (e.g. therapeutic and lithotripsy).  The diagnostic machine probes, which produce the ultrasound, come in a variety of sizes and styles, each type being produced for a particular special use.  Some require a large trolley for all the parts of the unit, while the smallest come in a small box with only a audio loudspeaker as output.  They may be found in cardiology, maternity, outpatients and radiology departments and will often have a printer attached for recording images.  Unlike X-rays, ultrasound poses no danger to the human body.
                        </Text>
                    </View>
                )
                break;
                case value === 'PULSE OXIMETER':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text>
                        A pulse oximeter is a device that non-invasively monitors the oxygen saturation of a patient's blood.  It measures the amount of oxygen in a patient s arterial blood during operations and diagnosis. This level of oxygen, or  oxygen saturation is often referred to SpO2, measured in %, and this is displayed on the pulse oximeter.  A pulse oximeter also displays pulse rate.
                        </Text>
                    </View>
                )
                break;
                case value === 'STETHOSCOPE':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                    </View>
                )
                break;
            default:
                return (
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text>Error Searching for Content Type</Text>
                    </View>
                )
                break;
        }
    }
  render() {
        return (
        <View>
            {this.displayContent(this.props.name)}
        </View>
    );
  }
}