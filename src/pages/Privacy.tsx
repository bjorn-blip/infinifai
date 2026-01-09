import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Privacy = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8">Privacy & Algemene Voorwaarden</h1>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Algemene Voorwaarden</h2>

                        <div className="space-y-6 text-muted-foreground">
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Adviserende Rol</h3>
                                <p>
                                    De rol van Infinif.ai is uitsluitend adviserend. Infinif.ai geeft aanbevelingen en advies over technologische
                                    oplossingen, strategieën en implementaties. De uitvoering en implementatie van deze adviezen valt volledig onder de
                                    verantwoordelijkheid van de opdrachtgever of de door hem aangewezen partijen.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Beperking van Aansprakelijkheid</h3>
                                <p>
                                    Infinif.ai is niet aansprakelijk voor directe of indirecte schade die voortvloeit uit de implementatie van
                                    adviezen of aanbevelingen, noch voor het handelen of nalaten van externe partijen die bij het project
                                    betrokken zijn.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Scope van het Project</h3>
                                <p>
                                    Het werk dat door Infinif.ai wordt geleverd, is beperkt tot de deliverables en activiteiten zoals beschreven in
                                    het projectvoorstel. Aanvullende werkzaamheden kunnen buiten de scope van het project vallen en worden
                                    gefactureerd op basis van een separate overeenkomst.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Externe Planning</h3>
                                <p>
                                    De geplande kosten en uren in dit voorstel zijn indicatief. Afwijkingen in werkelijke kosten en tijdsbesteding
                                    worden altijd vooraf besproken en schriftelijk bevestigd door beide partijen.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Externe Tools en Diensten</h3>
                                <p>
                                    De selectie en het gebruik van externe tools, software en consultancy vallen onder de verantwoordelijkheid
                                    van de opdrachtgever. Infinif.ai adviseert hiervoor, maar is niet verantwoordelijk voor de prestaties, kosten of
                                    geschiktheid van deze tools en diensten.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Betalingsvoorwaarden</h3>
                                <p>
                                    Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan. Bij overschrijding van deze
                                    termijn behoudt Infinif.ai zich het recht om de samenwerking op te schorten tot betaling is voldaan.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Wijzigingen in Overeenkomst</h3>
                                <p>
                                    Eventuele wijzigingen in de projectopdracht, scope of planning worden schriftelijk overeengekomen voordat
                                    ze worden uitgevoerd. Dit kan leiden tot aanpassingen in kosten en worden gefactureerd op basis van een
                                    aanvullende overeenkomst.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Beëindiging van de Overeenkomst</h3>
                                <p>
                                    Beide partijen kunnen de overeenkomst met een opzegtermijn van 14 dagen schriftelijk beëindigen. Bij
                                    voortijdige beëindiging worden alleen de tot dan toe geleverde werkzaamheden gefactureerd.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Toepasselijk Recht en Geschillen</h3>
                                <p>
                                    Op deze overeenkomst is Nederlands recht van toepassing. Geschillen die voortvloeien uit deze
                                    overeenkomst worden in der minne opgelost. Indien geen overeenstemming wordt bereikt, wordt het geschil
                                    voorgelegd aan de bevoegde rechter in Nederland.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Privacybeleid</h2>

                        <div className="space-y-6 text-muted-foreground">
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Gegevensverzameling</h3>
                                <p>
                                    Infinif.ai verzamelt alleen persoonsgegevens die nodig zijn voor het verlenen van onze diensten. Dit omvat
                                    contactgegevens die u vrijwillig verstrekt via ons contactformulier.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Gebruik van gegevens</h3>
                                <p>
                                    Uw gegevens worden uitsluitend gebruikt voor het beantwoorden van uw vragen en het verlenen van onze
                                    diensten. Wij delen uw gegevens niet met derden zonder uw expliciete toestemming.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Cookies</h3>
                                <p>
                                    Deze website gebruikt functionele cookies om de gebruikerservaring te verbeteren. Wij gebruiken geen
                                    tracking cookies zonder uw toestemming.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-6">Contact</h2>
                        <div className="text-muted-foreground space-y-2">
                            <p>Voor vragen over deze voorwaarden kunt u contact opnemen:</p>
                            <p className="font-semibold text-foreground">bjorn@infinif.ai</p>
                            <p>KvK-nummer: 97606952</p>
                            <p>BTW-nummer: NL005278494B56</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};
