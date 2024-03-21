package ch.unisg.gomcs.LehrerPortal.database;


import lombok.Data;

@Data
public class Lernziele {
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

}
