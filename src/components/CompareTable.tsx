import { WEAPON_COMPARE } from "@/data/discs";
import { ZH_WEAPON_COMPARE } from "@/data/zh-content";
import type { Locale } from "@/lib/i18n";

export function CompareTable({ locale = "en" }: { locale?: Locale }) {
  const rows = locale === "zh" ? ZH_WEAPON_COMPARE : WEAPON_COMPARE;
  const headers =
    locale === "zh"
      ? ["特性", "投掷飞盘", "三叉戟", "弓"]
      : ["Feature", "Throwing Disc", "Trident", "Bow"];

  return (
    <div className="table-wrap">
      <table className="compare-table">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature}>
              <th scope="row">{row.feature}</th>
              <td>{row.disc}</td>
              <td>{row.trident}</td>
              <td>{row.bow}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
