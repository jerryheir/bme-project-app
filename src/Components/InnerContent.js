import React from 'react';
import { View, Text, Dimensions, Linking, TouchableOpacity, Image, ScrollView } from "react-native";
import EquipmentList from './EquipmentList';
import { color } from '../Style/Color';

export default class InnerContent extends React.Component {
    displayContent = (value) => {
        switch (true) {
            case value === 'INTRODUCTION TO BIO MEDICAL ENGINEERING (BME)':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text style={{ fontSize: 18 }}>
                            Biomedical Engineering is the application of engineering principles and design concepts to medicine and biology for healthcare purposes (e.g. diagnostic or therapeutic). This field seeks to close
                            the gap between engineering and medicine,
                            combining the design and problem solving skills of
                            engineering with medical biological sciences to advance
                                health care treatment, including diagnosis monitoring,
                                and therapy.
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>FIELDS ASSOCIATED WITH BIOMEDICAL ENGINEERING {'\n'}</Text>
                        <Text style={{ fontSize: 18 }}>
                        {'\n'}<Text style={{ fontWeight: 'bold' }}>1.	Bioinformatics:</Text>{'\n'} This is an interdisciplinary field that develops methods and software tools for understanding biological data. As an interdisciplinary field of science, bioinformatics combines biology, computer science, mathematics and statistics to analyze and interpret biological data.
                        {'\n'}<Text style={{ fontWeight: 'bold', marginTop: 8 }}>2.	Tissue Engineering:</Text>{'\n'} This is the use of a combination of cells, engineering and materials methods, and suitable biochemical and physicochemical factors to improve or replace biological tissues. Tissue engineering involves the use of a tissue scaffold for the formation of new viable tissue for a medical purpose. 
                        {'\n'}<Text style={{ fontWeight: 'bold', marginTop: 8 }}>3.	Clinical engineering:</Text>{'\n'} This is a field in biomedical engineering that is responsible primarily for applying and implementing medical technology to optimize healthcare delivery.
                        {'\n'}<Text style={{ fontWeight: 'bold', marginTop: 8 }}>4.	Bioinstrumentation:</Text>{'\n'} The development and use of instruments for recording and transmitting physiological data.
                        {'\n'}<Text style={{ fontWeight: 'bold', marginTop: 8 }}>5.	Biomechanics:</Text>{'\n'} This is the study of the structure and function of the mechanical aspects of biological systems, at any level from whole organisms to organs, cells and cell organelles, using the methods of mechanics.
                        {'\n'}<Text style={{ fontWeight: 'bold', marginTop: 8 }}>6.	Medical imaging</Text> is the technique and process of creating visual representations of the interior of a body for clinical analysis and medical intervention, as well as visual representation of the function of some organs or tissues
                        {'\n'}<Text style={{ fontWeight: 'bold', marginTop: 8 }}>7.	Rehabilitation Engineering:{'\n'}</Text> is the systematic application of engineering and sciences to design, develop, adapt, test, evaluate, apply and distribute technological solutions to problems confronted by individuals with disabilities.
                        {'\n'}<Text style={{ fontWeight: 'bold', marginTop: 8 }}>8.	Biotechnology:{'\n'}</Text> This is the use of biological processes, organisms or  systems to manufacture products intended to improve the quality of human life.
                        </Text>
                    </View>
                );
                break;
            case value === 'INTRODUCTION TO CLINICAL ENGINEERING':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}/HEALTH ENGINEERING</Text>
                        <Text style={{ fontSize: 18 }}>
                        Clinical engineering is primarily responsible for applying and implementing medical technology to optimize Health care delivery. So on that note a clinical engineer is a professional who supports and advances patient care by applying engineering and managerial skills to Health care technology.
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>ROLES PLAYED BY A CLINICAL ENGINEER{'\n'}</Text>
                        <Text style={{ fontSize: 18 }}>
                        {'\n'}<Text style={{ fontWeight: 'bold' }}>I. </Text>Training and supervising biomedical equipment technicians.
                        {'\n'}<Text style={{ fontWeight: 'bold', marginTop: 8 }}>II. </Text>Technology manager for medical equipment systems
                        {'\n'}<Text style={{ fontWeight: 'bold', marginTop: 8 }}>III. </Text>	They are involved in all aspects of the development process, from medical device design and development, through product sales and support.
                        {'\n'}<Text style={{ fontWeight: 'bold', marginTop: 8 }}>IV. </Text>They design Systems and products
                        {'\n'}<Text style={{ fontWeight: 'bold', marginTop: 8 }}>V. </Text>Install medical equipment and devices
                        </Text>
                    </View>
                );
                break;
            case value === 'DEVICES, MEDICAL EQUIPMENTS USED BY BIO MEDICAL ENGINEERS':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Text style={{ fontSize: 18 }}>
                        <Text style={{ fontWeight: 'bold' }}>What are Medical Devices:</Text>{'\n'} A medical device is any apparatus, appliance, software, material, or other article—whether used alone or in combination, including the software intended by its manufacturer to be used specifically for diagnostic and/or therapeutic purposes and necessary for its proper application—intended by the manufacturer to be used for human beings
                        {'\n'}<Text style={{ fontWeight: 'bold' }}>What are Medical Equipment:</Text>{'\n'} Medical equipment is designed to aid in the diagnosis, monitoring or treatment of medical conditions.
                        </Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>LIST OF HOSPITAL EQUIPMENT AND DEVICES</Text>
                            <EquipmentList navigation={this.props.navigation}/>
                    </View>
                )
                break;
                case value === 'ELECTRONIC COMPONENTS':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '97%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <Image 
                        source={require('../Images/circuit.jpg')}
                        style={{
                            width: 300,
                            height: 200,
                            alignSelf: 'center',
                            marginTop: 20
                        }}
                        />
                        
                        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            SEMI CONDUCTOR{'\n'}</Text> 
                            <Text>
                            • Silicon is the most common material used to build semiconductor devices.{'\n'}
                            • Si is the main ingredient of sand and it is estimated that a cubic mile of seawater contains 15,000 tons of Si.{'\n'}
                            • Si is spun and grown into a crystalline structure and cut into wafers to make electronic devices.{'\n'}
                            </Text>
                            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            Semiconductor{'\n'}</Text>
                            <Text>
                            • Atoms in a pure silicon wafer contains four electrons in outer orbit (called valence electrons).{'\n'}
                            – Germanium is another semiconductor material with four valence electrons.{'\n'}
                            • In the crystalline lattice structure of Si, the valence electrons of every Si atom are locked up in covalent bonds with the valence electrons of four neighbouring Si atoms.{'\n'}
                            – In pure state, Si wafer does not contain any free charge carriers.{'\n'}
                            – voltage applied across pure Si wafer does not yield electron flow through the wafer.{'\n'}
                            – A pure Si wafer is said to act as an insulator.{'\n'}
                            • In order to make useful semiconductor devices, materials such as phosphorus (P) and boron (B) are added (doped) to Si to change Si’s conductivity.     {'\n'}   
                            </Text>
                            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            N-Type Silicon{'\n'}</Text>
                            <Text>
                            • Pentavalent impurities such as phosphorus, arsenic, antimony, and bismuth have 5 valence electrons.{'\n'}
                            • When phosphorus impurity is added to Si, every phosphorus atom’s four valence electrons are locked up in covalent bond with valence electrons of four neighboring Si atoms. However, the 5th valence electron of phosphorus atom does not find a binding electron and thus remains free to float. When a voltage is applied across the silicon-phosphorus mixture, free electrons migrate toward the positive voltage end.{'\n'}
                            • When phosphorus is added to Si to yield the above effect, we say that Si is doped with phosphorus. The resulting mixture is called N-type silicon (N: negative charge carrier silicon).{'\n'}
                            • The pentavalent impurities are referred to as donor impurities.{'\n'}
                            </Text>
                            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            P-Type Silicon{'\n'}</Text>
                            <Text>
                            • Trivalent impurities e.g., boron, aluminum, indium, and gallium have 3 valence electrons.{'\n'}
                            • When boron is added to Si, every boron atom’s three valence electrons are locked up in covalent bond with valence electrons of three neighboring Si atoms. However, a vacant spot “hole” is created within the covalent bond between one boron atom and a neighboring Si atom. The holes are considered to be positive charge carriers.{'\n'}
                            When a voltage is applied across the silicon-boron mixture, a hole moves toward the negative voltage end while a neighboring electron fills in its place.{'\n'}
                            • When boron is added to Si to yield the above effect, we say that Si is doped with boron. The resulting mixture is called P-type silicon (P: positive charge carrier silicon).{'\n'}
                            • The trivalent impurities are referred to as acceptor impurities.{'\n'}
                            </Text>
                            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            Diode{'\n'}</Text>
                            <Image 
                            source={require('../Images/diode.jpg')}
                            style={{
                                width: 300,
                                height: 200,
                                alignSelf: 'center',
                                marginTop: 20
                            }}
                            />
                            <Text>
                            •A diode is a 2 lead semiconductor that acts as a one way gate to electron flow.{'\n'}
                            – Diode allows the flow of current to pass in only one direction.{'\n'}
                            •A pn-junction diode is formed by joining together n-type and p-type silicon.{'\n'}
                            •In practice, as the n-type Si crystal is being grown, the process is abruptly altered to grow p-type Si crystal. Finally, a glass or plastic coating is placed around the joined crystal.{'\n'}
                            •The p-side is called anode and the n-side is called cathode.{'\n'}
                            •When the anode and cathode of a pn-junction diode are connected to external voltage such that the potential at anode is higher than the potential at cathode, the diode is said to be forward biased.{'\n'}
                            –In a forward-biased diode current is allowed to flow through the device.{'\n'}
                            •When potential at anode is smaller than the potential at cathode, the diode is said to be reverse biased. In a reverse-biased diode current is blocked.{'\n'}
                            </Text>
                            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            Diode: How it Works{'\n'}</Text>
                            <Text>
                            • A diode’s one-way gate feature does not work all the time.{'\n'}
                            • Typically for silicon diodes, an applied voltage of 0.6V or greater is needed, otherwise, the diode will not conduct.{'\n'}
                            • This feature is useful in forming a voltage-sensitive switch.{'\n'}
                            • I-V characteristics for silicon and germanium diodes is shown below.{'\n'}
                            </Text>
                            <Image 
                            source={require('../Images/diodeAndSymbol2.jpg')}
                            style={{
                                width: 300,
                                height: 200,
                                alignSelf: 'center',
                                marginTop: 20
                            }}
                            />
                            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            Diode: How it doesn’t work{'\n'}</Text>
                            <Text>
                            • When a diode is connected to a battery as shown, holes in the n-side are forced to the left while electrons in the p-side are forced to the right. This results in an empty zone around the pn- junction that is free of charge carries creating a depletion region. This depletion region acts as an insulator preventing current from flowing through the diode. When a diode is arranged in this way, it is said to be reversebiased.{'\n'}
                            </Text>
                            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            Transistor Types: BJT, JFET, and MOSFET{'\n'}</Text>
                            <Text>
                            • Bipolar Junction Transistor (BJT){'\n'}
                            – NPN and PNP{'\n'}
                            • Junction Field Effect Transistor (JFET){'\n'}
                            – N-channel and P-channel{'\n'}
                            • Metal Oxide Semiconductor FET (MOSFET){'\n'}
                            – Depletion type (n- and p-channel) and enhancement type (n- and p-channel){'\n'}
                            </Text>
                            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            Optoelectronics{'\n'}</Text>
                            <Text>
                            Light emitting diodes Infrared detector{'\n'}
                            • In optoelectronics we deal with 2 types of electronic devices.{'\n'}
                            • Light emitting electronic devices: ones that generate electromagnetic energy under the action of electrical field. Example: light emitting diodes (visible and infrared light).{'\n'}
                            • Light detecting devices: ones that transform electromagnetic energy input into electrical current/voltage. Examples: photoresistors, photodiodes, phototransistors, etc.{'\n'}
                            Light-Emitting Diodes (LEDs){'\n'}
                            </Text>
                            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            LED {'\n'}</Text>
                            <Text>
                            • 2 lead semiconductor device.{'\n'}
                            • Light emitting PN-junction diode.{'\n'}
                            – Visible or infrared light.{'\n'}
                            • Has polarity.{'\n'}
                            • Recall diodes act as a one way gate to current flow.{'\n'}
                            – A forward-biased PN-junction diode allows current flow from anode to cathode.{'\n'}
                            • An LED conducts and emits light when its anode is made more positive (approx. 1.4V) than its cathode.{'\n'}
                            – With reverse polarity, LED stops conducting and emitting light.{'\n'}
                            </Text>
                            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            How LED Works{'\n'}</Text>
                            <Text>
                            • The light-emitting section of an LED is made by joining n-type and p-type semiconductors together to form a pn junction.{'\n'}
                            • When the pn junction is forward-biased, electrons in the n side are excited across the pn junction and into the p side, where they combine with holes.{'\n'}
                            • As the electrons combine with the holes, photons are emitted.{'\n'}
                            • The pn-junction section of an LED is encased in an epoxy shell that is doped with light scattering particles to diffuse light and make the LED appear brighter.{'\n'}
                            • Often a reflector placed beneath the semiconductor is used to direct the light upward.{'\n'}
                            </Text>
                            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            Photoresistors{'\n'}</Text>
                            <Text>
                            • Light sensitive variable resistors.{'\n'}
                            • Its resistance depends on the intensity of light incident upon it.{'\n'}
                            – Under dark condition, resistance is quite high (MΩ: called dark resistance).{'\n'}
                            – Under bright condition, resistance is lowered (few hundred Ω).{'\n'}
                            • Response time:{'\n'}
                            – When a photoresistor is exposed to light, it takes a few milliseconds, before it lowers its resistance.{'\n'}
                            – When a photoresistor experiences removal of light, it may take a few seconds to return to its dark resistance.{'\n'}
                            </Text>
                            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            How Photoresistor Works{'\n'}</Text>
                            <Text>
                            • Special semiconductor crystal, such as cadmium sulfide or lead sulfide is used to make photoresistors.{'\n'}
                            • When this semiconductor is placed in dark, electrons within its structure resist flow through the resistor because they are too strongly bound to the crystal’s atoms.{'\n'}
                            • When this semiconductor is illuminated, incoming photons of light collide with the bound electrons, stripping them from the binding atom, thus creating holes in the process.{'\n'}
                            • Liberated electrons contribute to the current flowing through the device.{'\n'}
                            </Text>
                        <Image 
                            source={require('../Images/photoResistor.jpg')}
                            style={{
                                width: 300,
                                height: 200,
                                alignSelf: 'center',
                                marginTop: 20
                            }}
                        />
                        <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 24, textAlign: 'center', alignSelf: 'center'}}>
                            CAPACITORS{'\n'}</Text>
                            <Text>
                            There are many types of capacitors depending upon their function, the dielectric material used, their shape etc. The main classification is done according to fixed and variable capacitors.
                            </Text>
                            <Image 
                            source={require('../Images/typeOfCapacitors.jpg')}
                            style={{
                                width: 300,
                                height: 200,
                                alignSelf: 'center',
                                marginTop: 10
                            }}
                        />
                    </View>
                )
                break;
                case value === 'REFERENCES AND RESOURCES':
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', borderRadius: 5, backgroundColor: '#FFF', marginVertical: 21, padding: 16, alignSelf: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{value}</Text>
                        <ScrollView>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.asaio.com/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.asaio.com/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.abhi.org.uk/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.abhi.org.uk/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.biomat.net/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.biomat.net/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.bmes.org/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.bmes.org/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.borsoc.org.uk/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.borsoc.org.uk/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.esao.org/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.esao.org/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.esbiomaterials.eu/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.esbiomaterials.eu/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.embs.org/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.embs.org/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.imbe.leeds.ac.uk/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.imbe.leeds.ac.uk/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.ipem.ac.uk/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.ipem.ac.uk/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.mhra.gov.uk/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.mhra.gov.uk/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}onPress={()=>Linking.openURL('http://www.evidence.NHS.UK/nhs-evidence-content').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.evidence.NHS.UK/nhs-evidence-content</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.raeng.org.uk/policy/engineering-policy/panels').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.raeng.org.uk/policy/engineering-policy/panels</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.rcoa.ac.uk/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.rcoa.ac.uk/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.rcplondon.ac.uk/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.rcplondon.ac.uk/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.rcr.ac.uk/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.rcr.ac.uk/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.rceng.ac.uk/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.rceng.ac.uk/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.RSM.ac.uk/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.RSM.ac.uk/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.welcome.ac.uk/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.welcome.ac.uk/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://www.wolfson.org.uk/').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://www.wolfson.org.uk/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{ 
                            alignSelf: 'center', 
                            width: '98%',
                            borderBottomColor: '#000', 
                            borderBottomWidth: 0.5,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FFF',
                            padding: 21
                        }}
                        onPress={()=>Linking.openURL('http://guides.lib.umieh.ed').catch(err => console.error('An error occurred', err))}>
                            <Text
                            style={{
                                color: color.primary,
                                fontSize: 14
                            }}
                            >http://guides.lib.umieh.ed</Text>
                        </TouchableOpacity>
                        </ScrollView>
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
/*
http://www.asaio.com/
http://www.abhi.org.uk/
http://www.biomat.net/
http://www.bmes.org/
http://www.bhta.net/
http://www.borsoc.org.uk/
http://www.esao.org/
http://www.esbiomaterials.eu/
http://www.embs.org/
http://www.imbe.leeds.ac.uk/
http://www.ipem.ac.uk/
http://www.mhra.gov.uk/
http://www.evidence.NHS.UK/nhs-evidence-content
http://www.raeng.org.uk/policy/engineering-policy/panels form biomedical peng I needing.
http://www.rcoa.ac.uk/
http://www.rcplondon.ac.uk/
http://www.rcr.ac.uk/
http://www.rceng.ac.uk/
http://www.RSM.ac.uk/
http://www.welcome.ac.uk/
http://www.wolfson.org.uk/
http://guides.lib.umieh.ed>biomed



On Oct 9, 2018 15:21, "Nwaeze Jerry" <nwaezejerry@gmail.com> wrote:
https://www.dropbox.com/sh/4mvn1ob2940luma/AABRKDknnGuwVbDVWzpEGG8Za?dl=0


*/