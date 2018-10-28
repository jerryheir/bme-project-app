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
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            BASIC FAULT {'\n'}
                        </Text>
                        <Text>
                        •	Air in the blood line
                        •	Air leakages
                        •	No water supply
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            TROUBLE SHOOTING {'\n'}
                        </Text>
                        <Text>
                        •	Prime properly{'\n'}
                        •	Check the tubings{'\n'}
                        •	Check if the water source is connected properly{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            MAINTENANCE OF A HAEMODIALYSIS MACHINE {'\n'}
                        </Text>
                        <Text>
                        •	Regular Disinfection{'\n'}
                        •	Change tube after each session{'\n'}
                        •	Always make sure the water is purified and well connected.{'\n'}
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
                        COMMON FAULT{'\n'}
                        </Text>
                        <Text>
                        1.	Not enough pressure for gas exchange- this can be due to faulty bellow or ventilator. {'\n'}
                        2.	Display error {'\n'}
                        3.	Calibration error {'\n'}
                        4.	Leakage of air {'\n'}
                        5.	Faulty APL valve {'\n'}
                        6.	Electrical faults{'\n'}
                        </Text> 
                        
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        SOLUTION{'\n'}
                        </Text>
                        <Text>
                        1.	Check the bellow for leakage under it, change the bellow or ventilator. {'\n'}
                        2.	This can be due to software. Therefore you should update software. {'\n'}
                        3.	Recalibrate when there is calibration error. {'\n'}
                        4.	Change the tube. {'\n'}
                        5.	Change the APL valve {'\n'}
                        6.	Check the fuse and other safety devices, and power cable for continuity and repair if faulty.{'\n'}
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
                        An infant incubator is an electric medical device closed chamber in which a controlled environment is produced for the premature or critically ill( contagious disease) baby. The user (operator) can select the suitable temperature, humidity and oxygen level needed by the baby.
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            PRINCIPLE OF OPERATION {'\n'}
                        </Text>
                        <Text>
                        The general principle is that air is processed before it reaches baby. An electric fan draws room air through a bacterial filter which removes dust and bacteria. The filtered air flows over an electric heating element. The filtered and heated air then passes over a water tank where it is moistened. It then flows on to the incubator canopy. The incubator canopy is slightly pressurized. This allows expired carbon dioxide to pass back into the room via the vent holes and most of the air to be re-circulated. It also prevents unfiltered air entering the system.
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            BASIC PARTS OF AN INFANT INCUBATOR {'\n'}
                        </Text>
                        <Text>
                        1.	THE HOOD: it is made up of a transparent material, this creates as a protective barrier for the incubator and provides an environment that can be controlled. It also has several orifices that serves as an opening to easily reach the infant when food or drugs or have contact with it easily.{'\n'}
                        2.	TEMPERATURE SENSOR: a temperature sensor is strategically placed in a position in the hood to help sense the degree of heat being administered by the heating element, it also serves as a safety device in a way.{'\n'}
                        3.	HEATING ELEMENT: it provides the warm environment needed by the infant placed in the hood. It also has an effect on the humidity of the controlled environment.{'\n'}
                        FACTORS TO CONSIDER WHEN CHOOSING AN IDEAL ELEMENT{'\n'}
                        •	The heating element must be free air heating element or dry heating element.{'\n'}
                        •	The wattage must be at a tolerable wattage to ensure an ideal temperature or to control the heat.{'\n'}
                        •	The insulation resistance to earth must be less than 0.5Ω{'\n'}
                        •	It should be properly isolated and earthed from other metals and their components.{'\n'}
                        4.	CIRCULATING FAN: The circulating fan should be of moderate voltage, shouldn’t exceed that of the heater.{'\n'}
                        •	The fan should be positioned in a such a way that the air being circulated in the hood would be uniform.{'\n'}
                        •	The fan selected shouldn’t be noisy and it should circulate air in one direction.{'\n'}
                        5.	POWER PACK: it is made of components such as the rectifier that converts AC to DC for the machine use.{'\n'}
                        6.	THERMOSTAT: it is used to control the temperature(heater) in such a way that the heater doesn’t work always by shutting it off once the desired the temperature is acquired.{'\n'}
                        7.	SSR(SOLID STATE RELAY): it serves as a safety device that isolates two circuits but also at the same time connects them.{'\n'}
                        8.	TRAY{'\n'}
                        9.	FILTER{'\n'}
                        10.	HUMIDIFIER{'\n'}
                        11.	OXYGEN INLET.{'\n'}
                        12.	 CONTROL MODULE: it is the control system of the infant incubator.{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            BASIC FAULTS {'\n'}
                        </Text>
                        <Text>
                        •	Temperature not properly controlled{'\n'}
                        •	Incubator not heating even when the heater lamp is on.   
                        •	Fuse keeps blowing{'\n'}
                        •	Alarm not working{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            TROUBLE SHOOTING {'\n'}
                        </Text>
                        <Text>
                        •	Check the temperature probes and sensor connections. Replace the temperature probe and sensor and recheck{'\n'}
                        •	If accessible, replace heating element.  Otherwise refer to technician for repair{'\n'}
                        •	Replace with a new fuse  {'\n'} 
                        •	Replace the battery and recheck.{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            MAINTENANCE OF INCUBATOR {'\n'}
                        </Text>
                        <Text>
                        •	Cleaning : Wipe dust off exterior and cover equipment after checks   Remove any tape, paper or foreign body from equipment {'\n'}
                        •	Visual checks:Check all fittings and accessories are mounted correctly   Function checks:  Drain off the water tray. Run machine for 30 minutes to dry the tray. Refill tray with sterile water just before re-use.{'\n'}
                        </Text>
                    </View>
                )
                break;
                case value === 'NEBULIZER':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text>
                        A nebulizer is a device used to administer medication in the form of a mist inhaled into the lungs. Nebulizers are commonly used for treatment of cystic fibrosis, asthma and other respiratory diseases.  The reason for using a nebulizer for medicine to be administered directly to the lungs is that small aerosol droplets can penetrate into the narrow branches of the lower airways. Large droplets would be absorbed by the mouth cavity, where the clinical effect would be low.{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        BASIC FAULTS{'\n'}
                        </Text>
                        <Text>
                        •	Machine is working but flow is absent or low  {'\n'} 
                        •	Inadequate nebulizing amount{'\n'}
                        •	Equipment not running{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        TROUBLE SHOOTING {'\n'}
                        </Text>
                        <Text>
                        Clean filter  Connect pipe properly, clean chamber / mouthpiece  Replace tubing{'\n'}
                        Adjust output as directed in user manual  {'\n'}
                        Check power switched is on. Replace fuse with current voltage and current is blown{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        MAINTENANCE OF A NEBULIZER {'\n'}
                        </Text>
                        <Text>
                        •	Cleaning    Clean and sterilize mouthpiece and medicine chamber   Wipe dust from machine and replace cover after checks{'\n'}  
                        •	 Visual checks    Check all parts are present and tightly fitted   Check all moving parts move freely, all holes are unblocked  {'\n'}
                        •	 Function checks    Check the whole system function before use{'\n'}
                        </Text>
                    </View>
                )
                break;
                case value === 'AUTOCLAVE':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value} (HIGH PRESSURE STEAM STERILIZATION)</Text>
                        <Text>
                        Sterilization refers to the process that eliminates, removes, kills or deactivates all forms of life and also biological agents such as fungi, bacteria, viruses, spore forms, etc. present in a specific substance. Sterilization can be achieved through various means which include: heat, chemicals, irradiation, high pressure and filtration (Sterilization (microbiology), 2017). Sterilization is done to prevent the spreading of germs or communicable diseases by eliminating or exterminating all spore and non-spore forming pathogens to the barest minimum.{'\n'}
                        A widely used method for heat sterilization is the autoclave, sometimes called steam sterilization in which heat is used to kill the microbes in the substance (Sterilization (microbiology), 2017). The temperature of the heat and the duration of heating are the factors that affect the extent of sterilization. The longer the exposure to heat, the better the sterilization at a particular temperature.
                        An autoclave is a pressure chamber used to sterilize equipment’s and supplies. When items are places inside the autoclave, they are exposed to high temperature steam usually 121̊C for about 20 minutes at 15psi (What is Sterilization? 9 Sterilization Methods in Microbiology, n.d.) or 134̊C for about 3 minutes. The time varies depending on the amount and physical size of the equipment that needs to be sterilized.
                        After the chamber which is double lined with a bellow, of the autoclave sterilizer is closed, a vacuum pump removes all the air inside the chamber. The sterilizer is pumped with high pressured steam to quickly raise the internal temperature. When the temperature inside the chamber reaches about 121-140̊C, the thermostat kicks in and timer starts. During the sterilization process, steam continuously enters the autoclave to thoroughly kill all dangerous microorganisms. {'\n'}
                        Once the time for sterilization is complete, the pressure and steam inside the chamber will be released so that the chamber can be opened for cooling and drying the content. Most autoclaves have meters and charts that record or display information usually temperature and pressure as a function of time. The information is checked to ensure that the conditions required for sterilization are met. Indicator tape is placed on packages of products before autoclaving. These indicators changes colors when exposed to steam providing a visual confirmation.{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        TYPES OF AUTOCLAVES {'\n'}
                        </Text>
                        <Text>
                        1.	Bucket autoclaves.{'\n'}
                        2.	Table top autoclaves.{'\n'}
                        3.	Vertical load autoclaves{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        COMMON FAULTS {'\n'}
                        </Text>
                        <Text>
                        1. Equipment not heating{'\n'}
                        2. Pressure rises above marked level{'\n'}
                        3. Steam is constantly escaping.{'\n'}
                        4. Electrical shocks {'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        POSSIBLE CAUSES {'\n'}
                        </Text>
                        <Text>
                        1a) No power at main socket.{'\n'}
                        1b) Electrical cable fault.{'\n'}
                        1c) Damaged broken element{'\n'}
                        2) Blocked valve{'\n'}
                        3) Poor seal{'\n'}
                        4) Wiring faults{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        SOLUTIONs {'\n'}
                        </Text>
                        <Text>
                        1a)	Check power on. Replace fuse with correct rating.{'\n'}
                        1b)	Try cable of another piece of equipment.{'\n'}
                        1c)	Replace if broken.{'\n'}
                        2) Clean the pressure regulating valve, safety valve. Pressure vessel maybe over filled.Re-test autoclave under pressure with water only.{'\n'}
                        3) Clean leaking valve and hole. Replace if defective. Clean leaking seal or gasket. Replace if broken.{'\n'}
                        4) Check that it is properly earthed and wired.{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        MAINTENANCE{'\n'}
                        S/N	ROUTINE	PROCEDURE{'\n'}
                        </Text>
                        <Text>
                        1	Cleaning Daily: {'\n'}
                        Remove any dust/dirt with damp cloth.
                        Remove water and waste matter from the autoclave.{'\n'}
                        Weekly: {'\n'}
                        Unplug, clean inside and outside with damp cloth and dry off.{'\n'}
                        2	Visual checks Daily: {'\n'}
                        Check that all screws connections and parts are tightly fitted.{'\n'}
                        Check that all moving parts move freely, all holes are unblocked.{'\n'}
                        Weekly: {'\n'}
                        Check that internal heating element connections are tight.{'\n'}
                        Replace heating element if covered with lime scale.{'\n'}
                        3	Function checks	Daily: {'\n'}
                        Use troubleshooting guide if problem occurs {'\n'}
                        Weekly: {'\n'}
                        When next used check there are no leaks{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        SAFETY PRECAUTIONS TO BE TAKEN{'\n'}
                        </Text>
                        <Text>
                        •	Safety devices (all) must be operational e.g. safety valves.{'\n'}
                        •	It must be double insulated or multiple earthed.{'\n'}
                        •	Acceptable pressure limit must not be exceeded, pressure gauge must be working efficiently.{'\n'}
                        •	The bellow must be working to avoid blockage.{'\n'}
                        •	Ensure that the chamber casket is properly closed to avoid steam escaping.{'\n'}
                        •	The piping system must be clean.{'\n'}
                        •	The steaming lag must be in such a way to avoid bio-hazard.{'\n'}
                        •	The water valve and electronic valve must be clean and operational respectively.{'\n'}
                        •	The materials for sterilization should be properly dries.{'\n'}
                        •	The chamber should be well locked prior to use.{'\n'}
                        </Text>
                    </View>
                )
                break;
                case value === 'CENTRIFUGE':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text>
                        Centrifuge is designed to perform the function of separating blood cells in blood samples. Also it is used for separating liquids of different densities. A piece of an equipment that puts an object in rotation around a fixed axis’s e.g. (spun in a circle) applying a potentially strong force perpendicular to the axis of spin.
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            PRINCIPLE OF OPERATION {'\n'}
                        </Text>
                        <Text>
                        The centrifuge works using the sedimentation principle, where the centripetal acceleration causes denser substances and particles to move outward in the radial direction. At the same objects that are less dense are displaced and move to the centre. In a laboratory centrifuge that uses sample tubes, the radial acceleration causes denser particles to settle to the bottom of the tube, while low-density substances rise to the top.  It works on the principle of centrifugal force.{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        COMPONENT OF A CENTRIFUGE {'\n'}
                        </Text>
                        <Text>
                        1.	Swinging bucket – this is the part of the machine that spins the sample; it is connected to the electric motor. {'\n'}
                        2.	 Electric motor and armature – this is the electrical component of the machine that introduces the motion of the swinging bucket. It has a carbon brush.{'\n'}
                        3.	Damper rubber – it helps the centrifuge to withstand vibration when spinning. {'\n'}
                        4.	Fuse box – it’s a safety device. {'\n'}
                        5.	Power cables – this carries electric current from the power source to the machine{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        COMMON FAULT {'\n'}
                        </Text>
                        <Text>
                        1.	When the bucket is not spinning.{'\n'}
                        2.	-Bad fuse- this can cause -the equipment not to power on{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        POSSIBLE SOLUTION  {'\n'}
                        </Text>
                        <Text>
                        <Text>
                        1. Change the carbon brush or rub it against a rough surface, so that it can make contact and generate electricity. {'\n'}
                        2. Change the fuse. {'\n'}
                        </Text>
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            USES OF A CENTRIFUGE {'\n'}
                        </Text>
                        <Text>
                        A centrifuge is a device used in science used to separate suspension by density. The more dense particles separate and migrate to the bottom of the test tube, while t-he lighter particle moves towards the top. The machine is round and has holes which test tubes can be inserted into. Then, a lead covers the top of the machine and it can spin using its motor at a very high speed. If someone wanted to separate blood using its component red blood cell, white blood cell, platelets and plasma, they would use a centrifuge. The plasma would be floating on the top because it has the lowest density. It can be used to separate organelles from cells and to isolate nucleic acids. These are some examples of how a centrifuge can be used.
                        </Text>
                    </View>
                )
                break;
                case value === 'SUCTION MACHINE':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text>
                        The essence of coughing is to clear out secretion from the airway. Secretions can obstruct the airway making it difficult for the lungs to get the oxygen they need. Suctioning removes the secretions from the airways allowing the patient to breathe better. {'\n'}
                        A suction machine is a portable medical equipment used to clear out secretion which obstruct the stomach, mouth, airway and throat. It is a medical pump that uses negative pressure generated to air together with a sterile catheter to clear out body fluids (suction Pump, 2017) or substances obstructing the airways. Suction machine uses negative pressure to clear out secretions blocking the airways. There are various types of principles that a suction machine operates on such as diaphragm, pisting, thermiotic, centrifugal, peristaltic, venturial, rotary vial.  {'\n'}
                        A suction machine consists of: {'\n'}
                        i.	Canister or reservoir: used to collect the secretions from the patient. It is also called collecting jar.   {'\n'}
                        ii.	Catheter or connecting tubes: they are connected to the patient and allows for the passage of secretions from the patient into the canister.  {'\n'}
                        iii.	Bacteria filter: they prevent bacteria from leaving the canister.{'\n'}
                        iv.	Power system{'\n'}
                        v.	Pump: uses negative pressure to suck out secretions from patients.{'\n'}
                        A suction machine uses a long thin flexible plastic tube known as catheter to vacuum out secretions blocking the airways. These secretions are collected in a jar (canister) attached to the machine and can be emptied after the suctioning is completed. The bacteria filter is used to prevent bacteria from the secretions from escaping the collection jar. 
                        There are different types of suction machines. Some are portable and battery-powered while others are not. Portable ones are used to remove mucus from the airways. Electrical suctioning machines are widely used in medical field due to their ease of use and accuracy.
                        High suction machines are used for rapid aspiration of fluid or debris while low suction machines are used for post operation drainage of wound.{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        BASIC FAULTS {'\n'}
                        </Text>
                        <Text>
                        •	Speed too low.{'\n'}
                        •	Wrong directions of rotation.{'\n'}
                        •	Air leaks in suction piping{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        TROUBLE SHOOTING {'\n'}
                        </Text>
                        <Text>
                        •	Check whether motor is directly across the line and receiving full voltage.{'\n'}
                        •	Check motor rotation with directional arrow on pump casing.{'\n'}
                        •	Replace with new pipes{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        SAFETY PRECAUTIONS FOR USING SUCTION MACHINE {'\n'}
                        </Text>
                        <Text>
                        •	Collection jar should be cleaned according to the direction of the manufacturer.{'\n'}
                        •	The machine should be used only when needed.{'\n'}
                        •	It should be kept clean and free from bacteria to avoid risk of infecting the user.{'\n'}
                        •	The bacteria filter should be replaced every two months.{'\n'}
                        •	The machine should be cleaned after each use.{'\n'}
                        </Text>
                    </View>
                )
                break;
                case value === 'OXYGEN CONCENTRATOR':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text>
                        An oxygen concentrator is a device which concentrates the oxygen from a gas supply (typically ambient air) to supply an oxygen air enriched gas stream.  Oxygen concentrator produces the equivalent of 1-5 litres of per minutes of continuous oxygen flow and they use some version of pulse flow or “demand flow” to deliver oxygen only when the patient is inhaling. They can also provide pulses of oxygen either to provide higher intermittent flow or to reduce the power consumption.{'\n'}
                        This portable concentrator typically plugs into an electric outlet and may have an internal or external battery for operation away from home. Portable oxygen concentrator usually can be plugged into the DC outlet of a vehicle and most of this device is suitable for ambulatory. Oxygen concentrator have the advantage of not being as dangerous as oxygen cylinders which can, if ruptured or leaking can greatly increase the combustion rate of a fire. As such, oxygen concentrators are particularly advantageous in military or disaster situation where oxygen tank may be dangerous or unfeasible. There are also other medical uses for oxygen concentrator including emphysema and other respiratory diseases. 	{'\n'}
                        Atmospheric air consists of approximately 80% nitrogen and 20% oxygen. An oxygen concentrator uses air as a source of oxygen by separating these two components. It utilizes the property of zeolite granules to selectively absorb nitrogen from compressed air. Atmospheric air is gathered, filtered and raised to a pressure of 20 pounds per square inch (psi) by a compressor. The compressed air is then introduced into one of the canisters containing zeolite granules where nitrogen is selectively absorbed leaving the residual oxygen available for patient use. After about 20 seconds the supply of compressed air is automatically diverted to the second canister where the process is repeated enabling the output of oxygen to continue uninterrupted. While the pressure in the second canister is at 20 psi the pressure in the first canister is reduced to zero. This allows nitrogen to be released from the zeolite and returned into the atmosphere. The zeolite is then regenerated and ready for the next cycle. By alternating the pressure between the two canisters, a constant supply of oxygen is produced and the zeolite is continually being regenerated. Individual units have an output of up to five litres per minute with an oxygen concentration of up to 95%. {'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        COMMON FAULTS{'\n'}
                        </Text>
                        <Text>
                        Unit not operating power failure alarm sounds{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        POSSIBLE CAUSES {'\n'}
                        </Text>
                        <Text>
                        - No power from mains socket. {'\n'}
                        - Concentrator circuit breaker has been set off. {'\n'}
                        - Electrical cable fault{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        SOLUTION {'\n'}
                        </Text>
                        <Text>
                        Check mains switch is on and cable inserted. Replace fuse with correct voltage / current if blown. Check mains power is present at socket using equipment known to be working.  Contact electrician for repair if required. Press reset button if present. Try cable on another piece of equipment.{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        MAINTENANCE{'\n'}
                        </Text>
                        <Text>
                        Daily  
                        Cleaning    {'\n'}
                        </Text>
                        <Text>
                        Remove any dust / dirt with damp cloth and dry off   {'\n'}
                        Fill humidifier bottle up to marker with clean distilled water  {'\n'} 
                        Visual checks    {'\n'}
                        Check all screws, connectors, tubes and parts tightly fitted  {'\n'}
                        Function checks   {'\n'}
                        Check oxygen flow before clinically required  {'\n'}
                        </Text>
                        <Text>
                        Weekly  {'\n'}
                        Cleaning    {'\n'}
                        </Text>
                        <Text>
                        Wash filter in warm water and dry.  Replace if damaged   {'\n'}
                        Clean humidifier bottle thoroughly and dry off   {'\n'}
                        Visual checks    {'\n'}
                        Replace humidifier bottle if covered with lime scale.   {'\n'}
                        If mains plug, cable or sockets are damaged, replace   {'\n'}
                        Function checks   {'\n'}
                        Run machine for two minutes and check no alarms occur   {'\n'}
                        Check (see bubbles) that flow rate varies with flow control  {'\n'}
                        Every six months Biomedical Technician check required  {'\n'}
                        </Text>
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
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        TROUBLE SHOOTING{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            FAULT{'\n'}</Text>
                        <Text>
                        1. No fluid flow or suction through scope{'\n'}
                        2. Leakage in flexible endoscope{'\n'}
                        3. Fluid invasion, e.g.{'\n'}
                            - Image stains{'\n'}
                            - Foggy images{'\n'}
                            - Electrical malfunction{'\n'}
                        4. Picture is cloudy or with dark spots{'\n'}
                        5. Cannot freely bend to the degree specified{'\n'}
                        6. Instruments do not pass easily through the biopsy / access channel{'\n'}
                        7. Light not functioning{'\n'}
                        8. Electrical shocks{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            POSSIBLE CAUSE{'\n'}</Text>
                        <Text>
                        1a. Blocked air / water nozzle{'\n'}
                        1b. Loose or damage setscrew{'\n'}
                        2. Tears or cut in flexible shaft{'\n'}
                        3. Water or other fluids in dry parts of flexible scope due to holes, tears or improper cleaning.{'\n'}
                        4. Build up of matter on the distal lens. Broken fibres in cable{'\n'}
                        5a. Over-bending portion of scope.{'\n'}
                        5b. Fluid invasion{'\n'}
                        6. Damaged forceps and brushes Flush channel through{'\n'}
                        7. Bulb blown. Fuse blown. No power from socket{'\n'}
                        8. Wiring fault{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            SOLUTION{'\n'}</Text>
                        <Text>
                        1a. Press fluid valve and flush{'\n'}
                        1b. Clean and lubricate valve (see user manual){'\n'}
                        1c. Check tubes are not kinked.{'\n'}
                        2. Refer to biomedical technician{'\n'}
                        3. Perform leak test after every procedure If any fluid invasion occurs, refer to biomedical technician{'\n'}
                        4. Clean the lens with an alcohol wipe. If these significantly affect use, return to manufacturer{'\n'}
                        5. Do not force bending. Refer to biomedical technician{'\n'}
                        6. Check for burrs and nicks by rubbing a gloved hand over all surfaces of the accessory. Refer to biomedical technician if problem remains{'\n'}
                        7. Replace bulb with correct type, Light not functioning, Bulb blown, Fuse blown, No power from socket, Replace bulb with correct type Replace fuse with correct rating Check power switch is on. Check mains power is present at socket using equipment known to be working. Contact electrician for rewiring if power not present.{'\n'}
                        8. Refer to electrician{'\n'}
                        </Text>
                    </View>
                )
                break;
                case value === 'ULTRASOUND':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>MEDICAL {value} SCAN</Text>
                        <Text>
                        This is a diagnostic imaging technique based on the application of ultrasound.  Ultrasound   is’ sound waves  with frequencies higher than the upper audible limit of human hearing .ultrasound is no different from normal(audible) sound in its physical properties except in that humans cannot hear it .limit for audible sound is 20khz although is varies from persons to persons while ultrasound devices operates with frequencies from 20khz up to several giga hertz.{'\n'}
                        In medicine, ultrasound scan is used for imaging, it’s used to see internal body structure such as tendons, muscles, joints, vessels and internal organs .a common use however is of obstetric ultrasound which is the practise of examining pregnant women using ultrasound.{'\n'}
                        Ultrasound images (sonogram) are made by sending pulses into tissue using a probe .the sound echoes off the tissue different tissue reflecting varying degree of sound. These echoes are recorded and displayed as an image to the operator.{'\n'}
                        The ultrasound probe contain a crystal that sends out burst of high frequency vibration that pass through gel on through body soft tissue and bone reflects echoes back to the probes while packets of liquid pass the ultrasound straight through, the echoes are picked up and arranged into an image displayed on a screen. The machine offers a number of processing option for the signal and image displayed on a screen the machine offers a number of processing options for the signal and image and also allow the user measure physical features displayed on the screen. This requires the machine to incorporate a computer.{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        WORKING PRINCIPLE OF A MEDICAL ULTRASOUND SCAN.{'\n'}
                        </Text>
                        <Text>
                        The ultrasound beam originates from mechanical oscillation of numerous crystals in transducers which is excited by electrical pulses. (a piezoelectric effect). Piezoelectric effect to the application of electric field to a crystal which causes re-alignment of the internal dipole structures. The realignment results in crystal lengthening or contraction converting electrical energy {'\n'}
                        Piezoelectric converts kinetic energy or mechanical energy due to crystal deformation into electrical energy. This is how ultrasound transducers receive the sound waves.{'\n'}
                        The ultrasound waves (pulses of sound) are sent from the transducers propagates through different tissues and then returned to the transducers as reflected echoes. The echoes are converted back into electrical impulses by the transducers crystals and are further processed to form the ultrasound image u presented on the screen.{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        COMMON FAULTS {'\n'}
                        </Text>
                        <Text>
                        1) Equipment is not running 
                        2) Fuse keeps blowing
                        3) Probe head damaged or noisy
                        4) Image Quality is Poor
                        5) Display / computer error Software fault
                        6) Electrical shocks
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        POSSIBLE CAUSES {'\n'}
                        </Text>
                        <Text>
                        1a) No power from mains socket
                        1b) Electrical cable fault
                        2) Power supply or cable fault  
                        3) Possible internal fault
                        4a) Gel insufficient
                        4b) Controls set incorrectly
                        4c) Mains voltage is too low  
                        4d) Probe / display problem  
                        5) Turn machine off and restart.
                        6) Wiring fault
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        SOLUTION {'\n'}
                        </Text>
                        <Text>
                        1) Check power switch is on. Replace fuse with correct voltage and current if blown. Check mains power is present at socket using equipment known to be working.  Contact electrician for rewiring if power not present.  Try cable on another piece of equipment.
                        2) Refer to electrician
                        3) Exchange probe  Send for testing and repair
                        4a) Use more ultrasound gel  
                        4b) Check controls for correct positioning and operation (refer to user manual)  
                        4c) Use voltage stabiliser  
                        5) If problem persists ensure it is properly insulated and earthed.
                        6) Ensure it is properly insulated and earthed.
                        </Text>
                    </View>
                )
                break;
                case value === 'PULSE OXIMETER':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text>
                        A pulse ox meter is a device that non-invasively monitors the oxygen saturation of a patient's blood. It measures the amount of oxygen in a patient s arterial blood during operations and diagnosis.{'\n'}
                        Oxygen saturation is often referred to SpO2, measured in %, and this is displayed on the pulse ox meter. Pulse oximeter is used widely in hospital medical clinics operating rooms and homes. Both oxygen saturation level and pulse rate are vital signs of a patient .they are inexpensive and can report an accurate reading within seconds. Speed is important especially in emergency situation.{'\n'}
                        Pulse oximeter is used medically by patien-t with asthma, emphysema chronic obstructive airway disease (COAD),and other respiratory condition .patient with chronic respiratory problem should have their spo2 levels checked regularly and especially if they are not feeling well.{'\n'}
                        It measures the percentage of bound haemoglobin, Haemoglobin has higher affinity to carbon monoxide than oxygen and a high reading may occur despite the patient actually being hypoxemic.  {'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            HOW IT WORKS {'\n'}
                        </Text>
                        <Text>
                        The colored substance in blood, hemoglobin, is carrier of oxygen and the absorption of light by
                        Hemoglobin varies with the amount of oxygenation. Two different kinds of light (one visible, one invisible) are
                        Directed through the skin from one side of a probe, and the amount transmitted is measured on the other side.
                        The machine converts the ratio of transmission of the two kinds of light into a % oxygenation. Pulse ox meter
                        Probes can be mounted on the finger or ear lobe.{'\n'}
                        A pulse ox meter is a device that non-invasively monitors the oxygen saturation of a patient's blood. It measures
                        The amount of oxygen in a patient s arterial blood during operations and diagnosis. This level of oxygen, or
                        Oxygen saturation is often referred to SpO2, measured in %, and this is displayed on the pulse ox meter. Pulse oximeter is used widely in hospital medical clinics operating rooms and homes. Both oxygen saturation level and pulse rate are vital signs of a patient .they are inexpensive and can report an accurate reading within seconds. Speed is important especially in emergency situation.
                        {'\n'}Pulse oximeter is used medically by patient with asthma, emphysema chronic obstructive airway disease (COAD), and oth-er respiratory condition .patient with chronic respiratory problem should have thei--r spo2 levels checked regularly and especially if they are not feeling well.
                        It measures the percentage of bound haemoglobin ,haemoglobin has higher affinity to carbon monoxide than oxygen and a high reading may occur despite the patient actually being hypoxemic.  {'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        COMMON FAULTS{'\n'}
                        </Text>
                        <Text>
                        1a) Equipment is not running
                        1b) No power from mains socket
                        2) SpO2 or pulse rate not displayed Or unstable
                        3a) Probe off displayed on screen 
                        3b) Probe is not connected properly
                        4) Error displayed on screen
                        5a) Continuous alarm sounds
                        5b) Alarm limits set too low or high
                        6) Electrical shocks
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        POSSIBLE CAUSES{'\n'}
                        </Text>
                        <Text>
                        1a) Battery (if present) is discharged
                        1b) Electrical cable fault
                        2) Probe is not mounted correctly Probe not able to read through Dirt, nail polish, etc. Patient movement Patient s SpO2 value is too low to be measured. Internal malfunction
                        3) The connection between the Probe and ox meter is loose
                        4) Faulty probe or control circuit
                        5a) Power disconnected
                        5b) Internal malfunction
                        6) Wiring faults
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        SOLUTION{'\n'}
                        </Text>
                        <Text>
                        1) Check power switch is on. Replace fuse with correct voltage And current if blown. Check mains power is present at Socket using equipment known to Be working For rewiring if power not present. Recharge or replace battery. Try cable on another piece of Equipment. Change cable if need be.
                        2) Connect probe and cable properly Remove grease, dirt, nail polish And clean probe with alcohol. Request patient to remain still Further clinical examination of Patient. Recite probe if necessary
                        3) Make sure it is properly fitted prior to use.
                        4a) Ensure all cables connected to the display panel is correctly placed and fitted properly.
                        4b) Ensure that it is dust free.
                        5a) Set appropriate alarm limits
                        5b) Connect power cable
                        5c) Refer to biomedical technician
                        6) Ensure that the equipment is properly earthed or insulated.
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        Daily
                        Cleaning-{'\n'}
                        </Text>
                        <Text>
                        Remove any dust / dirt and replace equipment cover{'\n'}
                        Remove any tape, paper or foreign body from equipment{'\n'}
                        Clean probe with alcohol wipe after each use{'\n'}
                        Visual checks Check all parts are present and connected{'\n'}
                        Check cables are not twisted and remove from service if any damage is visible{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        Function Checks{'\n'}
                        </Text>
                        <Text>
                        Check operation on healthy subject before use{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        Weekly
                        Cleaning{'\n'}
                        </Text>
                        <Text>
                        Unplug, clean outside with damp cloth and dry off{'\n'}
                        Visual checks tighten any loose screws and check parts are fitted tightly{'\n'}
                        If plug, cable or sockets are damaged, replace{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        Function Checks{'\n'}
                        </Text>
                        <Text>
                        Check operation of all lights, indicators and visual displays{'\n'}
                        Check probe disconnection alarm.{'\n'}
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                        Every six months{'\n'}
                        </Text>
                        <Text>
                        Biomedical Technician check required{'\n'}
                        </Text>
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