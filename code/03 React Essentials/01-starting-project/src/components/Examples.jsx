import { useState } from 'react';
import Section from './Section';
import TabButton from './TabButton';
import Tabs from './Tabs';
import { EXAMPLES } from '../data';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    const buttons = (
        <>
            {
                Object.keys(EXAMPLES).map(topic => (
                    <TabButton
                        key={topic}
                        onClick={() => handleSelect(topic)}
                        isSelected={selectedTopic === topic}
                    >
                        {EXAMPLES[topic].title}
                    </TabButton>
                ))
            }
        </>
    )

    return (
        <Section id="examples" title="Examples">
            <Tabs buttons={buttons}>
                {!selectedTopic && <p>Please select a topic.</p>}
                {selectedTopic && (
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>
                )}
            </Tabs>
        </Section>
    );
}