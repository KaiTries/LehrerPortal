package ch.unisg.gomcs.LehrerPortal.domain.dto;


import lombok.Data;

@Data
public class MongoLernzielDocument {
    private String uid;
    private int fb_id;
    private int f_id;
    private int kb_id;
    private int ha_id;
    private String k_id;
    private String code;
    private String aufbau;
    private String zyklus;
    private String aufzaehlungspunkt;
    private String strukturtyp;
    private String sprache;
    private String bezeichnung;

    public MongoLernzielDocument() {
    }

    public MongoLernzielDocument(String uid, int fb_id, int f_id, int kb_id, int ha_id, String k_id, String code, String aufbau, String zyklus, String aufzaehlungspunkt, String strukturtyp, String sprache, String bezeichnung) {
        this.uid = uid;
        this.fb_id = fb_id;
        this.f_id = f_id;
        this.kb_id = kb_id;
        this.ha_id = ha_id;
        this.k_id = k_id;
        this.code = code;
        this.aufbau = aufbau;
        this.zyklus = zyklus;
        this.aufzaehlungspunkt = aufzaehlungspunkt;
        this.strukturtyp = strukturtyp;
        this.sprache = sprache;
        this.bezeichnung = bezeichnung;
    }
}
